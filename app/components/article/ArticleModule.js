import ArticleItems from "../../JSON/ArticleMessages";
import ContentfulImage from "@/lib/contentful-image";
import style from "../../style/modules/_articles.module.scss";
import ArticleModuleLarge from "./ArticleModuleLarge";

function ArticleModule(props) {
  return (
    <div className={style["current--news--section--container"]}>
      <h2 className="text-2xl font-bold mb-4">加拿大温州同乡总会</h2>
      <div className={style["article--flex--container"]}>
        <ArticleModuleLarge />
        <div className={[style["news--flex"], style["news--small"]].join(" ")}>
          {ArticleItems.CurrentEvents.map((item, index) => {
            return (
              <div className="max-h-max flex flex-col" key={index}>
                <ContentfulImage
                  objectFit="cover"
                  layout="intrinsic"
                  src={item.imageURL}
                  height={235}
                  width={419}
                  priority
                />
                <div className="mt-2 p-2">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <div className="flex justify-between flex-wrap flex-row mt-2">
                    <small className="flex content-center">{item.date}</small>
                    <a
                      className="whitespace-nowrap text-base text-blue-500 m-0 mr-0"
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
      </div>
    </div>
  );
}

export default ArticleModule;
