import "./CartOrder.scss";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";

const CartOrder = () => {
  const { cartItems, promoApplied } = useContext(AppContext);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  const getCheckout = () => {
    console.log(`Итого:
      скидка: ${discount.toFixed(2)},
      доставка: ${delivery.toFixed(2)},
      сумма: ${total.toFixed(2)},
      промокод: ${promoApplied}`);
  };

  return (
    <div className="order">
      <div className="title">Your Order</div>
      <div className="order-price-wrapper">
        <div className="price-row">
          <div className="name">Order price</div>
          <div className="price">${subtotal.toFixed(2)}</div>
        </div>
        <div className="price-row">
          <div className="name">Discount for promo code</div>
          <div>${promoApplied ? "10%" : "No"}</div>
        </div>
        <div className="price-row delimiter">
          <div className="name">
            Delivery <span className="additional">(Aug 02 at 16:00)</span>
          </div>
          <div className="price">${delivery.toFixed(2)}</div>
        </div>
        <div className="price-row total">
          <div className="name">Total</div>
          <div className="price">${total.toFixed(2)}</div>
        </div>
      </div>
      <div className="button-wrapper">
        <button
          className="button"
          onClick={getCheckout}
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default CartOrder;
