import "./ContentShopBlock.css";
import heroImg from "../../assets/images/no-photo.webp";

const ContentShopBlock = () => {
  return (
    <section className="hero-section container-1800">
      <div className="title-block">
        <div className="title">
          <h1>Shop</h1>
          <div className="menu">
            <div className="menu-item">
              <span>Home</span>
            </div>
            <div className="menu-item active">
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

export default ContentShopBlock;
