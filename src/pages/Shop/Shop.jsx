import "./Shop.css";
import arrowL from "../../assets/icons/arrow-left.svg";
import arrowR from "../../assets/icons/arrow-right.svg";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Card from "../../components/Card/Card.jsx";
import Sort from "../../components/Sort/Sort.jsx";
import { useState } from "react";

const Shop = ({ setFavoritesCount, setCartCount, cartCount }) => {
  const [sortProduct, setSortProduct] = useState("RELEVANCE");

  const onSortChange = (type) => {
    setSortProduct(type);
  };

  return (
    <div className="container">
      <section className="shop">
        <Sidebar />
        <div className="products-wrapper">
          <Sort onSortChange={onSortChange} />
          <div className="products">
            <Card
              setFavoritesCount={setFavoritesCount}
              setCartCount={setCartCount}
              cartCount={cartCount}
              sortProduct={sortProduct}
            />
          </div>
          <div className="pagination">
            <div className="button left">
              <img src={arrowL} alt="arrow-left" />
            </div>
            <div className="pages">
              <div className="page active">1</div>
              <div className="page">2</div>
              <div className="page">3</div>
            </div>
            <div className="button right">
              <img src={arrowR} alt="arrow-right" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
