import ArticleItems from "../../JSON/ArticleMessages";
import style from "../../style/modules/_articles.module.scss";
import ContentfulImage from "@/lib/contentful-image";

function ArticleModuleLarge(props) {
  return (
    <div
      className={[
        style["current--news--section--container"],
        style["large--module"],
      ].join(" ")}
    >
      <div className="flex flex-col">
        <ContentfulImage
          objectFit="cover"
          layout="intrinsic"
          src={props.cover}
          height={235}
          width={419}
          priority
        />
        <div className="mt-2 p-3">
          <h3 className="text-base mb-2 font-bold">{props.title}</h3>

          <p>{props.excerpt}</p>
          <div className="flex flex-row mt-2">
            <small>{props.date}</small>
            <a
              className="whitespace-nowrap mb-2 text-base text-blue-500 ml-auto mr-0"

              href={`/posts/${props.url}`}
            >
              阅读全文
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleModuleLarge;
