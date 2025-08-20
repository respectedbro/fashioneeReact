import "./Shop.css";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Card from "../../components/Card/Card.jsx";
import Sort from "../../components/Sort/Sort.jsx";
import { useContext, useMemo, useState } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";
import productsData from "../../../products.json";

const PRODUCTS_PER_PAGE = 12;

const Shop = ({ setFavoritesCount, setCartCount, cartCount }) => {
  const [sortProduct, setSortProduct] = useState("RELEVANCE");
  const {
    setCurrPage,
    filterText,
    appliedCategory,
    appliedMinPrice,
    appliedMaxPrice,
    appliedColors,
  } = useContext(AppContext);

  const filteredProducts = useMemo(() => {
    return productsData.products
      .filter((prod) => {
        if (appliedCategory !== "All") {
          return prod.categories.includes(appliedCategory);
        }
        return true;
      })
      .filter((prod) =>
        prod.name.toLowerCase().includes(filterText.toLowerCase())
      )
      .filter((prod) => {
        const min = appliedMinPrice !== null ? Math.max(0, appliedMinPrice) : 0;
        const max = appliedMaxPrice !== null ? appliedMaxPrice : 250;
        return prod.price >= min && prod.price <= max;
      })
      .filter((prod) => {
        if (appliedColors.length === 0) {
          return true;
        }
        return appliedColors.includes(prod.color);
      });
  }, [
    filterText,
    appliedCategory,
    appliedMinPrice,
    appliedMaxPrice,
    appliedColors,
  ]);

  const onSortChange = (type) => {
    setSortProduct(type);
    setCurrPage(1);
  };

  return (
    <div className="container">
      <section className="shop">
        <Sidebar />
        <div className="products-wrapper">
          <Sort
            onSortChange={onSortChange}
            productsCount={filteredProducts.length}
          />
          <div className="products">
            <Card
              setFavoritesCount={setFavoritesCount}
              setCartCount={setCartCount}
              cartCount={cartCount}
              sortProduct={sortProduct}
              productsPerPage={PRODUCTS_PER_PAGE}
              filteredProducts={filteredProducts}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
