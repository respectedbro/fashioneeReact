import heart from "../../assets/icons/heart.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import "./Card.scss";
import { useContext, useState } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";
import Pagination from "../Pagination/Pagination.jsx";

const Card = ({
  setFavoritesCount,
  setCartCount,
  sortProduct,
  productsPerPage,
  filteredProducts,
}) => {
  const [favorites, setFavorites] = useState([]);
  const { cartItems, setCartItems, currPage, setCurrPage } =
    useContext(AppContext);

  const sortProducts = (products) => {
    const sorted = [...products];

    switch (sortProduct) {
      case "from-a":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "from-z":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "ASC":
        return sorted.sort((a, b) => a.price - b.price);
      case "DESC":
        return sorted.sort((a, b) => b.price - a.price);
      case "RELEVANCE":
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const startIndex = (currPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = sortedProducts.slice(startIndex, endIndex);

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);

    const count = newFavorites.filter((item) => item).length;
    setFavoritesCount(count);
  };

  const handleAddToCart = (product) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      newCartItems[itemIndex].quantity += 1;
    } else {
      newCartItems.push({
        ...product,
        quantity: 1,
      });
    }

    setCartItems(newCartItems);
    setCartCount(newCartItems.reduce((sum, item) => sum + item.quantity, 0));
  };

  const handleRemoveFromCart = (product) => {
    const newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      if (newCartItems[itemIndex].quantity > 1) {
        newCartItems[itemIndex].quantity -= 1;
      } else {
        newCartItems.splice(itemIndex, 1);
      }
      setCartItems(newCartItems);
      setCartCount(newCartItems.reduce((sum, item) => sum + item.quantity, 0));
    }
  };

  const getProductQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <>
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
                <div
                  className="favorites"
                  onClick={() => toggleFavorite(index)}
                >
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
              {getProductQuantity(product.id) === 0 ? (
                <button
                  className="buy-button"
                  onClick={() => handleAddToCart(product)}
                >
                  Buy
                </button>
              ) : (
                <div className="quantity">
                  <div
                    className="count-button"
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    -
                  </div>
                  <div className="count">{getProductQuantity(product.id)}</div>
                  <div
                    className="count-button"
                    onClick={() => handleAddToCart(product)}
                  >
                    +
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currPage={currPage}
          totalPages={totalPages}
          setCurrPage={setCurrPage}
        />
      )}
    </>
  );
};

export default Card;
