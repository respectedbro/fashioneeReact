import "./Price.scss";
import AppContext from "../../contexts/AppContext/AppContext.jsx";
import { useContext } from "react";

const Price = () => {
  const { minPrice, setMinPrice, maxPrice, setMaxPrice } =
    useContext(AppContext);

  const handleMinChange = (e) => {
    const value =
      e.target.value === "" ? null : Math.max(0, Number(e.target.value));
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value =
      e.target.value === "" ? null : Math.max(0, Number(e.target.value));
    setMaxPrice(value);
  };

  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Price</div>
      <div className="sidebar-content">
        <div className="price-bar">
          <input
            className="input"
            type="number"
            placeholder="0"
            value={minPrice || ""}
            onChange={handleMinChange}
          />
          <input
            className="input"
            type="number"
            placeholder="250"
            value={maxPrice || ""}
            onChange={handleMaxChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
