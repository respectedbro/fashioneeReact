import "./Header.css";

import logo from "../../assets/icons/logo.svg";
import arrow from "../../assets/icons/arrow.svg";
import arrowPink from "../../assets/icons/arrow-pink.svg";
import searchIcon from "../../assets/icons/search.svg";
import userIcon from "../../assets/icons/user.svg";
import heartIcon from "../../assets/icons/heart.svg";
import cartIcon from "../../assets/icons/cart.svg";

const Header = ({ setCurrentPage, favoritesCount, cartCount }) => {
  return (
    <header className="header container-1800">
      <div className="left-side">
        <div className="logo-container">
          <div className="burger-menu">
            <input
              type="checkbox"
              id="burger-checkbox"
              className="burger-checkbox"
            />
            <label className="burger" htmlFor="burger-checkbox"></label>
          </div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="menu">
          <div className="menu-item">
            <span>Home</span>
          </div>
          <div className="menu-item">
            <span>Pages</span>
            <img className="arrow-default" src={arrow} alt="arrow" />
            <img className="arrow-hover" src={arrowPink} alt="arrow-pink" />
          </div>
          <div
            className="menu-item active"
            onClick={() => setCurrentPage("Shop")}
          >
            <span>Shop</span>
            <img className="arrow-default" src={arrow} alt="arrow" />
            <img className="arrow-hover" src={arrowPink} alt="arrow-pink" />
          </div>
          <div className="menu-item">
            <span>Blog</span>
          </div>
          <div className="menu-item">
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="header-icon">
          <img src={searchIcon} alt="ico" />
        </div>
        <div className="header-icon">
          <img src={userIcon} alt="ico" />
        </div>
        <div className="header-icon">
          <img src={heartIcon} alt="ico" />
          <div className="counter">{favoritesCount}</div>
        </div>
        <div className="header-icon" onClick={() => setCurrentPage("Cart")}>
          <img src={cartIcon} alt="ico" />
          <div className="counter">{cartCount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
