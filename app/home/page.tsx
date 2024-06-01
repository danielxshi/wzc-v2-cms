import LargeContent from "./../components/organisms/LargeContent"
import Hero from "@/app/public/images/index-committee.webp"
import ArticleSection from "./../components/article/ArticleSection";
import React from "react";
import President from "./../components/President";

export default function Home() {
  return (
    <>
      <President />
      <ArticleSection />
      <div className="bg--primary--white">
      <LargeContent imageSrc={Hero}>
        <div className="mb-4">
          <h3 className="font-bold text-2xl mb-4">加拿大温州同乡总会宗旨</h3>
          <h6 className="font-bold text-xl mb-4">团结、互助、携手、共进</h6>
        </div>
        <p className="mb-4">
          加强同乡联谊，促进团结互助； <br />
          凝聚同乡力量，互通咨询商机；
          <br />
          共谋同乡福利，参与社会公益。
        </p>
        <p className="mb-4">
          加拿大温州同乡总会是侨居加拿大温州人温馨的家，也是连接加拿大和温州家乡的纽带桥梁。
          加拿大温州同乡总会本着”团结、互助、携手、共进”的理念，团结所有的温州同乡，集聚大家的智慧和力量，互通商业信息，为温籍海外侨胞创造更大、更广的发展空间。
        </p>
        <p className="pb-4">
          加拿大温州同乡总会致力于和加拿大各新老侨团增进沟通，加强合作，相互尊重；团结华人社区，寻求共同发展；连系加国政府，传递华人心声，融入当地社会，丰富多元文化；
          联合加拿大本地商界社团，组织各项商务、文化交流活动，构建平台，协助华人开创事业，促进加中经贸往来和科技、文化交流。
        </p>
      </LargeContent>
    </div>
    </>
  );
}
