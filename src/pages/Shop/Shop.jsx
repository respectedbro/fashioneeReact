import "./Shop.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Card from "../../components/Card/Card.jsx";
import Sort from "../../components/Sort/Sort.jsx";
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";

const PRODUCTS_PER_PAGE = 12;

const Shop = ({ setFavoritesCount, setCartCount, cartCount }) => {
  const [sortProduct, setSortProduct] = useState("RELEVANCE");
  const { setCurrPage } = useContext(AppContext);

  const onSortChange = (type) => {
    setSortProduct(type);
    setCurrPage(1);
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
              productsPerPage={PRODUCTS_PER_PAGE}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
