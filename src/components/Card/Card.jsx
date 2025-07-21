import heart from "../../assets/icons/heart.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import "./Card.css";
import productsData from "../../../products.json";
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";

const Card = ({ setFavoritesCount, setCartCount }) => {
  const {
    filterText,
    appliedCategory,
    appliedMinPrice,
    appliedMaxPrice,
    appliedColors,
  } = useContext(AppContext);

  const displayedProducts = productsData.products
    .filter((prod) => {
      if (appliedCategory !== "All") {
        return prod.categories.includes(appliedCategory);
      }
      return true;
    })
    .filter((prod) =>
      prod.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .filter((prod) => {
      const min = appliedMinPrice !== null ? appliedMinPrice : 0;
      const max = appliedMaxPrice !== null ? appliedMaxPrice : Infinity;
      return prod.price > min && prod.price <= max;
    })
    .filter((prod) => {
      if (appliedColors.length === 0) {
        return true;
      }
      return appliedColors.includes(prod.color);
    })
    .slice(0, 12);

  const [favorites, setFavorites] = useState(
    Array(displayedProducts.length).fill(false)
  );

  const [cartItems, setCartItems] = useState(
    Array(displayedProducts.length).fill(0)
  );

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);

    const count = newFavorites.filter((item) => item).length;
    setFavoritesCount(count);
  };

  const handleAddToCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index] += 1;
    setCartItems(newCartItems);
    setCartCount(newCartItems.reduce((sum, item) => sum + item, 0));
  };

  const handleRemoveFromCart = (index) => {
    if (cartItems[index] > 0) {
      const newCartItems = [...cartItems];
      newCartItems[index] -= 1;
      setCartItems(newCartItems);
      setCartCount(newCartItems.reduce((sum, item) => sum + item, 0));
    }
  };

  return (
    <div className="products">
      {displayedProducts.map((product, index) => (
        <div className="product" key={product.id}>
          <div className="photo">
            <img src={product.image} alt={product.name} />
            <div className="top-bar">
              <div className="labels">
                {product.isSale && <span className="label sale">Sale</span>}
                {product.isNew && <span className="label new">New</span>}
              </div>
              <div className="favorites" onClick={() => toggleFavorite(index)}>
                <img src={favorites[index] ? heartRed : heart} alt="heart" />
              </div>
            </div>
          </div>
          <div className="info">
            <div className="name">{product.name}</div>
            <div className="price">
              <div className="current-price">{product.price}</div>
              <div className="old-price">{product.oldPrice}</div>
            </div>
          </div>
          <div className="buy-product">
            {cartItems[index] === 0 ? (
              <button
                className="buy-button"
                onClick={() => handleAddToCart(index)}
              >
                Buy
              </button>
            ) : (
              <div className="quantity">
                <div
                  className="count-button"
                  onClick={() => handleRemoveFromCart(index)}
                >
                  -
                </div>
                <div className="count">{cartItems[index]}</div>
                <div
                  className="count-button"
                  onClick={() => handleAddToCart(index)}
                >
                  +
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
