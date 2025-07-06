import heart from "../../assets/icons/heart.svg";
import heartRed from "../../assets/icons/heart-red.svg";
import "./Card.css";
import productsData from "../../../products.json";
import { useState } from "react";

const Card = ({ setFavoritesCount }) => {
  const displayedProducts = productsData.products.slice(0, 12);

  const [favorites, setFavorites] = useState(
    Array(displayedProducts.length).fill(false)
  );

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);

    const count = newFavorites.filter((item) => item).length;
    setFavoritesCount(count);
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
        </div>
      ))}
    </div>
  );
};

export default Card;
