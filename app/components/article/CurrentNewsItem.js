import ArticleItems from "../../JSON/ArticleMessages";
import style from "../../style/modules/_articles.module.scss";
import Image from "next/image";
import Link from "next/link";
import ContentfulImage from "@/lib/contentful-image";

function CurrentNews(props) {
  return (
    <div className={style["sponsor--item--container"]}>
      <div className={style["sponsor--image--container"]}>
        <ContentfulImage
          src={props.src}
          layout="fill"
        />
      </div>
      <div className={style["sponsor--content--container"]}>
        <h4 className="text-base">
          {props.title}
        </h4>
        <div className="flex flex-row mt-2">
          <small>{props.date}</small>
          <a
            className="whitespace-nowrap mb-2 text-base text-blue-500 ml-auto mr-0"
            href={props.URL}
          >
            阅读全文
          </a>
        </div>
      </div>
    </div>
  );
}

export default CurrentNews;
