import arrowWhite from "../../assets/icons/arrow-white.svg";
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";

const CartPromo = () => {
  const [promo, setPromo] = useState("");
  const { setPromoApplied } = useContext(AppContext);

  const handleApplyPromo = () => {
    if (promo.trim().toLowerCase() === "ilovereact") {
      setPromoApplied(true);
    } else {
      setPromoApplied(false);
    }
  };

  return (
    <div className="promo-code-wrapper">
      <div className="info">
        <div className="title">You Have A Promo Code?</div>
        <div className="description">
          To receive up-to-date promotional codes, subscribe to us on social
          networks.
        </div>
      </div>
      <div className="promo-code">
        <input
          className="input"
          type="text"
          name="promo-code"
          placeholder="Enter promo code"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
        />
        <div className="button-wrapper">
          <button className="button" onClick={handleApplyPromo}>
            <img src={arrowWhite} alt="arrow-icon" />
          </button>
          <div className="vertical-line"></div>
        </div>
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
  );
};

export default CartPromo;
