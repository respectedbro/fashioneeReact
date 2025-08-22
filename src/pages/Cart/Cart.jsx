import "./Cart.scss";
import CartProduct from "../../components/CartProduct/CartProduct.jsx";
import CartOrder from "../../components/CartOrder/CartOrder.jsx";
import CartPromo from "../../components/CartPromo/CartPromo.jsx";
import { useContext } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const handleQuantityItem = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="container">
      <section className="cart">
        <div className="order-wrapper">
          <div className="product-list">
            {cartItems.length > 0 ? (
              cartItems.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  onRemove={handleRemoveItem}
                  onQuantityItem={handleQuantityItem}
                />
              ))
            ) : (
              <div>Cart is empty</div>
            )}
          </div>
          <CartOrder cartItems={cartItems} />
        </div>
        <CartPromo cartItems={cartItems} />
      </section>
    </div>
  );
};

export default Cart;
