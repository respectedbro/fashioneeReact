import "./Footer.css";

import payoneer from "../../assets/icons/poneer.svg";
import paypal from "../../assets/icons/ppal.svg";
import masterCard from "../../assets/icons/mc.svg";
import visa from "../../assets/icons/visa.svg";
import sendIcon from "../../assets/icons/send.svg";
import logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="column column-1">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="about-brand">
              Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt
              nostrud excepteur voluptate.
            </div>

            <div className="find-us">
              <div className="find-us-text">Find us here:</div>
              <div className="find-us-links">
                <div className="find-us-link">
                  <a href="">fb</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="">tw</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="">ins</a>
                </div>
                <div className="line"></div>
                <div className="find-us-link">
                  <a href="">pt</a>
                </div>
              </div>
            </div>
          </div>
          <div className="column column-2">
            <div className="title">About</div>
            <ul className="custom-list">
              <li className="item">
                <a href="">About us</a>
              </li>
              <li className="item">
                <a href="">Collections</a>
              </li>
              <li className="item">
                <a href="">Shop</a>
              </li>
              <li className="item">
                <a href="">Blog</a>
              </li>
              <li className="item">
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="column column-3">
            <div className="title">Useful links</div>
            <ul className="custom-list">
              <li className="item">
                <a href="">Privacy Policy</a>
              </li>
              <li className="item">
                <a href="">Terms of use</a>
              </li>
              <li className="item">
                <a href="">Support</a>
              </li>
              <li className="item">
                <a href="">Shipping details</a>
              </li>
              <li className="item">
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="column column-4">
            <div className="title">Newsletter</div>
            <div className="newsletter-text">
              Subscribe to be the first to hear about deals, offers and upcoming
              collections.
            </div>
            <div className="newsletter-form">
              <form action="">
                <label>
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <img className="send-icon" src={sendIcon} alt="send-icon" />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div>© All right reserved. Fashionee 2020</div>
          <div className="payment-methods-container">
            <div>Payment Methods:</div>
            <div className="payment-methods">
              <div className="payment-method">
                <img src={visa} alt="visa" />
              </div>
              <div className="payment-method">
                <img src={masterCard} alt="master-card" />
              </div>
              <div className="payment-method">
                <img src={paypal} alt="paypal" />
              </div>
              <div className="payment-method">
                <img src={payoneer} alt="payoneer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
