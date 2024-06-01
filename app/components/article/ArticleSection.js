import ArticleModule from "./ArticleModule";
import CurrentNews from "./CurrentNewsModule";
import LargeLayout from "../layouts/LargeLayout";

function ArticleSection(props) {
  return (
    <>
      <div className="bg--primary--white">
        <LargeLayout className="bg--primary--white">
          <ArticleModule />
          <CurrentNews />
        </LargeLayout>
      </div>
    </>
  );
}

export default ArticleSection;
