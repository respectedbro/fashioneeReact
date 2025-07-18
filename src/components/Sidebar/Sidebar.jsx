import "./Sidebar.css";
import sidebar from "../../assets/images/season-sale-banner.svg";
import Search from '../Search/Search.jsx';
import Categories from '../Categories/Categories.jsx';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Search/>
<Categories/>
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
