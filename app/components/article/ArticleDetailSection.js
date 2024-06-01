import React from "react";
import style from "../../style/modules/_articles.module.scss";
import Link from "next/link";
function ArticleDetailSection(props) {
  return (
    <div className={style["article--detail--section"]}>
      <div className={style["margin-realign"]}>
        <div className={style["article--detail--heading--container"]}>
          <h2 className="text-2xl font-bold">{props.category}</h2>
          <small className="mr-2 ml-auto text-base">
            当前位置:
            {/* home */}
            <Link href="/">
              <a className="text-link-black">&nbsp;首页</a>
            </Link>
            &nbsp; &gt; &nbsp;
            <Link href={`/${props.parentDirectory}/${props.categoryClass}`}>
              <a className="text-link-black">{props.category}</a>
            </Link>
            &nbsp; &gt; &nbsp;
            <Link href={`/${props.subDirectory}`}>
              <a className="text-link-black">{props.subCategory}</a>
            </Link>
          </small>
        </div>
        <h1 className="text-6xl font-bold mt-12 leading-loose">
          {props.articleTitle}
        </h1>
        {props.children}
      </div>
    </div>
  );
}

export default ArticleDetailSection;
