import "./ShopComponent.css";
import arrowL from "../../assets/icons/arrow-left.svg";
import arrowR from "../../assets/icons/arrow-right.svg";

import HeaderComponent from "../../components/Header/HeaderComponent.jsx";
import ContentShopBlock from "../../components/ContentShopBlock/ContentShopBlock.jsx";
import FooterComponent from "../../components/Footer/FooterComponent.jsx";
import SidebarComponent from "../../components/Sidebar/SidebarComponent.jsx";
import CardComponent from "../../components/Card/CardComponent.jsx";
import Cart from '../Cart/Cart.jsx';

const ShopComponent = () => {
  return (
    <>
      <div className="container">
        <section className="shop">
          <SidebarComponent />
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
              <CardComponent />
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
      {/*<Cart/>*/}
    </>
  );
};

export default ShopComponent;
