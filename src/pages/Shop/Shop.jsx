import "./Shop.css";
import arrowL from "../../assets/icons/arrow-left.svg";
import arrowR from "../../assets/icons/arrow-right.svg";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Card from "../../components/Card/Card.jsx";

const Shop = ({ setFavoritesCount, setCartCount, cartCount }) => {
  return (
      <div className="container">
        <section className="shop">
          <Sidebar />
          <div className="products-wrapper">
            <div className="sort-and-count">
              <div className="products-count">
                There are <span className="bold">67</span> products in this
                category
              </div>
              <div className="sort">
                <select className="input">
                  <option value="RELEVANCE">Relevance</option>
                  <option value="ASC">By ASC</option>
                  <option value="DESC">By DESC</option>
                </select>
              </div>
            </div>
            <div className="products">
              <Card setFavoritesCount={setFavoritesCount}
              setCartCount={setCartCount}
                    cartCount={cartCount}
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
