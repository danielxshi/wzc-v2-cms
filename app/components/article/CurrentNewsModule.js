import CurrentNewsItem from "../article/CurrentNewsItem"
import ArticleItems from "../../JSON/ArticleMessages";


function CurrentNews(props) {
  return (
    <div className="col-start-9 row-start-1 col-span-4 current--news--module">
      <h2 className="text-2xl font-bold mb-4">加拿大新闻</h2>
      <div>
        {
          ArticleItems.SponsoredNews.map((item, index) => {
            return(
              <CurrentNewsItem
                key={index}
                title={item.Title}
                date={item.date}
                src={item.Image}
                URL={`/article/${item.id}`}
              ></CurrentNewsItem>
            )
          })
        }
      </div>
    </div>
  );
}

export default CurrentNews;
