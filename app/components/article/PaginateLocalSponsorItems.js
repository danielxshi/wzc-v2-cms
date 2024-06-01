import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ArticleListItem from "./ArticleListItem";

export default function PaginateLocalSponsorItems(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="images">
        {currentItems.map((currentItems) => {
          return (
            <div className="image">
              <ArticleListItem
                title={currentItems.article.title}
                date={currentItems.article.date}
                imgSRC={currentItems.article.imageURL}
                textPreview={currentItems.article.previewText}
                URL={currentItems.article.link}
              ></ArticleListItem>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="pagination__number"
        previousLinkClassName="pagination__arrow"
        nextLinkClassName="pagination__arrow"
        activeLinkClassName="pagination__number--active"
      />
    </>
  );
}
