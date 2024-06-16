import React from "react";
import style from "../../style/modules/_articles.module.scss";
import Link from "next/link";
function ArticleDetailSection(props) {
  return (
    <div className={style["article--detail--section"]}>
      <div className={style["margin-realign"]}>
        <div className={style["article--detail--heading--container"]}>
          <h2 className="text-2xl font-bold uppercase opacity-60">{props.category}</h2>
          <small className="mr-2 ml-auto text-base">
            当前位置:
            {/* home */}
            <span className="text-link-black" href="/">
            会长致辞
            </span>
            &nbsp; &gt; &nbsp;
            <span
              className="text-link-black"
              href={`/${props.parentDirectory}/${props.categoryClass}`}
            >
              {props.category}
            </span>
            &nbsp; &gt; &nbsp;
            <span className="text-link-black" href={`/${props.subDirectory}`}>
              {props.subCategory}
            </span>
          </small>
        </div>
        <h1 className="text-6xl font-bold mt-12 md:mb-12 mb-4 leading-loose">
          {props.articleTitle}
        </h1>
        {props.children}
      </div>
    </div>
  );
}

export default ArticleDetailSection;
