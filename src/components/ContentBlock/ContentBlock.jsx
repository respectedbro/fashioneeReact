import "./ContentBlock.css";
import heroImg from "../../assets/images/no-photo.webp";

const ContentBlock = ({ setCurrentPage, currentPage }) => {
  return (
    <section className="hero-section container-1800">
      <div className="title-block">
        <div className="title">
          <h1>{currentPage}</h1>
          <div className="menu">
            <div
              className={`menu-item ${currentPage === "Cart" ? "active" : ""}`}
              onClick={() => setCurrentPage("Cart")}
            >
              <span>Cart</span>
            </div>
            <div
              className={`menu-item ${currentPage === "Shop" ? "active" : ""}`}
              onClick={() => setCurrentPage("Shop")}
            >
              <span>Shop</span>
            </div>
          </div>
        </div>

        <div className="hero-line"></div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="photo" />
      </div>
    </section>
  );
};

export default ContentBlock;
