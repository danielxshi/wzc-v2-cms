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
      {ArticleItems.BigNews.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <ContentfulImage
              objectFit="cover"
              layout="intrinsic"
              src={item.imageURL}
              height={235}
              width={419}
              priority
            />
            <div className="mt-2 p-3">
              <h3 className="text-base mb-2 font-bold">{item.title}</h3>

              <p>{item.textPreview}</p>
              <div className="flex flex-row mt-2">
                <small>{item.date}</small>
                <a
                  className="whitespace-nowrap mb-2 text-base text-blue-500 ml-auto mr-0"
                  href={`/article/${item.id}`}
                >
                  阅读全文
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticleModuleLarge;
