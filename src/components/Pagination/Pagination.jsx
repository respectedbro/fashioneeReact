import arrowL from "../../assets/icons/arrow-left.svg";
import arrowR from "../../assets/icons/arrow-right.svg";
import "./Pagination.scss";

const Pagination = ({ currPage, setCurrPage, totalPages }) => {
  const handlePrev = () => currPage > 1 && setCurrPage(currPage - 1);
  const handleNext = () => currPage < totalPages && setCurrPage(currPage + 1);

  const pagination = [];
  for (let i = 0; i < totalPages; i++) {
    pagination.push(i + 1);
  }

  return (
    <div className="pagination">
      <div
        className={`button left ${currPage === 1 ? "disabled" : ""}`}
        onClick={handlePrev}
      >
        <img src={arrowL} alt="arrow-left" />
      </div>
      <div className="pages">
        {pagination.map((page) => (
          <div
            key={page}
            className={currPage === page ? "page active" : "page"}
            onClick={() => setCurrPage(page)}
          >
            {page}
          </div>
        ))}
        {/*<div className="page active">1</div>*/}
        {/*<div className="page">2</div>*/}
        {/*<div className="page">3</div>*/}
      </div>
      <div
        className={`button right ${currPage === totalPages ? "disabled" : ""}`}
        onClick={handleNext}
      >
        <img src={arrowR} alt="arrow-right" />
      </div>
    </div>
  );
};

export default Pagination;
