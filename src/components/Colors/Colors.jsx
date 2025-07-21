import { useContext } from "react";
import "./Colors.css";
import AppContext from "../../contexts/AppContext/AppContext.jsx";
import productData from "../../../products.json";

const Colors = () => {
  const { selectColors, setSelectColors } = useContext(AppContext);

  const allColors = [];
  productData.products.forEach((product) => {
    if (!allColors.includes(product.color)) {
      allColors.push(product.color);
    }
  });

  const handleColorSelect = (color) => {
    if (selectColors.includes(color)) {
      setSelectColors(selectColors.filter((col) => col !== color));
    } else {
      setSelectColors([...selectColors, color]);
    }
  };

  return (
    <div className="sidebar-item">
      <div className="sidebar-title">Colors</div>
      <div className="sidebar-content">
        <div className="colors">
          {allColors.map((color) => (
            <div className="color" key={color}>
              <input
                className="color-checkbox"
                type="checkbox"
                name={color}
                id={color}
                value={color}
                checked={selectColors.includes(color)}
                onChange={() => handleColorSelect(color)}
              />
              <label className="color-name" htmlFor={color}>
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Colors;
