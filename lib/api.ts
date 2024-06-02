const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  excerpt
  category
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

interface ContentfulPost {
    slug?: string;
    title?: string;
    coverImage?: { url: string };
    date?: string;
    excerpt?: string;
    category?: string;
    content?: PostContent;
}

interface PostContent {
    json?: any;
    links?: any;
}

async function executeGraphQLQuery(query: string, preview = false): Promise<Response> {
  const accessTokens = preview
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessTokens}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  );
}

export async function getPreviewPostBySlug(slug: string | null): Promise<ContentfulPost> {
  const query =
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`;
  const response = await executeGraphQLQuery(query, true);
  const json = await response.json();
  const post = json?.data?.postCollection?.items?.[0];
  if (!post) {
      console.error(`Failed to retrieve preview post ${slug}: ${JSON.stringify(json)}`);
  }
  return post as ContentfulPost;
}

export async function getAllPosts(isDraftMode: boolean): Promise<ContentfulPost[]> {
  const query = 
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${isDraftMode}, limit: 10) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`;
  const response = await executeGraphQLQuery(query, isDraftMode);
  const json = await response.json();
  const posts = json?.data?.postCollection?.items
  if (!posts) {
      console.error(`Failed to retrieve posts [isDraftMode=${isDraftMode}]: ${JSON.stringify(json)}`);
      return [];
  }
  return posts as ContentfulPost[];
}
