import Carousel from "../components/header/Carousel";
import CouncilMessages from "../JSON/CouncilMessages";
// import Image from "next/image";
import style from "../style/modules/_council.module.scss";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/organisms/sectionHeader";
import LargeLayout from "../components/layouts/LargeLayout";
import style2 from "../style/modules/_banner.module.scss";
import MenuItems from "../JSON/ArticleMessages";
import ContentfulImage from "@/lib/contentful-image";

export const renderSwitch = (params) => {
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  const value = params[keys[0]];
  const test = params[keys[1]];

  switch (keys[0]) {
    case "paragraph":
      return <p className="text-2xl leading-loose mr-2">{value["text"]}</p>;

    case "listNoStyleNoIndent":
      return (
        <ul>
          {value.map((obj, index) => (
            <li className="text-2xl" key={index}>
              {obj.text}
            </li>
          ))}
        </ul>
      );

    case "contentSection":
      return (
        <div className="leading-loose">
          {value.map((obj, index) => (
            <>
              <h2>{obj.title}</h2>
              <span className="text-2xl leading-loose" key={index}>
                {obj.text}
                <strong>{obj.bold}</strong>
                <a href={obj.linkURL} className="m-0 text--link--red">
                  {obj.link}
                </a>
              </span>
            </>
          ))}
        </div>
      );

    case "councilTitle":
      return (
        <div className="">
          {value.map((obj, index) => (
            <ul className={style["exec--wrapper"]}>
              <div className={style["title--container"]}>
                <h3>{obj.title}</h3>
              </div>

              <ul key={index} className={style["exec--container"]}>
                {obj.exec.map((obj, index) => (
                  <span className="text-2xl leading-loose">{obj.member}</span>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      );

    case "councilPresident":
      return (
        <div className="">
          {value.map((obj, index) => (
            <ul className={style["exec--wrapper"]}>
              <div className={style["title--container"]}>
                <h3>{obj.title}</h3>
              </div>

              <ul key={index} className={style["exec--container"]}>
                {obj.exec.map((obj, index) => (
                  <span className="text-4xl leading-loose">{obj.member}</span>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      );

    default:
      return "";
  }
};

export default function Council(props) {
  return (
    <>
      <Carousel />
      {/* 
        TODO 
        Add grid
      */}
      <div className="grid--container">
        {CouncilMessages.CouncilListMessages.map((items, index) => {
          return (
            <div className={style["article--content--item"]} key={index}>
              {renderSwitch(items)}
            </div>
          );
        })}
        <section className="col-span-full">
          {CouncilMessages.CouncilExecMessages.map((items, index) => {
            return (
              <div className={style["article--content--item"]} key={index}>
                {renderSwitch(items)}
              </div>
            );
          })}
        </section>
      </div>

      {/* <LargeLayout>
        <div className={style2["opportunity--wrapper"]}>
          <SectionHeader header={"公告板"} />
          <div className="grid--spread news--preview--container">
            {MenuItems.NewsPreviewItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-md news--preview--item w-1/3 h-auto relative shadow-md	"
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className={style2["image--cta"]}>
                      <ContentfulImage
                        objectFit="cover"
                        layout="intrinsic"
                        src={item.src}
                        height={235}
                        width={419}
                        alt={item.alt}
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="max-w-fit flex text-base mt-2">
                      {item.caption}
                    </p>
                    <a
                      href={`/article/${item.id}`}
                      className="text-base text-center mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      了解详情
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </LargeLayout> */}
    </>
  );
}
