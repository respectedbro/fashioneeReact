import "./Sidebar.css";
import sidebar from "../../assets/images/season-sale-banner.svg";
import Search from "../Search/Search.jsx";
import Categories from "../Categories/Categories.jsx";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";
import Price from "../Price/Price.jsx";
import Colors from "../Colors/Colors.jsx";

const Sidebar = () => {
  const {
    selectedCategory,
    setAppliedCategory,
    minPrice,
    setAppliedMinPrice,
    maxPrice,
    setAppliedMaxPrice,
    selectColors,
    setAppliedColors,
  } = useContext(AppContext);

  const handleApplyFilters = () => {
    setAppliedCategory(selectedCategory);
    setAppliedMinPrice(minPrice);
    setAppliedMaxPrice(maxPrice);
    setAppliedColors(selectColors);
  };
  return (
    <div className="sidebar">
      <Search />
      <Categories />
      <Price />
      <Colors />
      <div className="sidebar-item">
        <div className="button-wrapper">
          <button className="button" onClick={handleApplyFilters}>
            Apply Filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-title">Reviewed By You</div>
        <div className="sidebar-content">
          <div className="reviewed-products">
            <div className="product">
              <div className="image"></div>
              <div className="info">
                <div className="name">Retro style handbag</div>
                <div className="price">
                  <div className="current-price">$35.99</div>
                  <div className="old-price">$52.99</div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="image"></div>
              <div className="info">
                <div className="name">Warm casual sweater</div>
                <div className="price">
                  <div className="current-price">$35.99</div>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="image"></div>
              <div className="info">
                <div className="name">Textured turtleneck with zip</div>
                <div className="price">
                  <div className="current-price">$35.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a href="#">
          <img src={sidebar} alt="season-sale-banner" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
