import heart from '../../assets/icons/heart.svg';
import heartRed from '../../assets/icons/heart-red.svg';
import './Card.css';
import productsData from '../../../products.json';
import {useContext, useState} from 'react';
import AppContext from '../../contexts/AppContext/AppContext.jsx';

const Card = ({setFavoritesCount, setCartCount, cartCount}) => {
    const {
        filterText,
        appliedCategory,
        appliedMinPrice,
        appliedMaxPrice
    } = useContext(AppContext);

    const displayedProducts = productsData.products
        .filter(prod => {
            if (appliedCategory !== 'All') {
                return prod.categories.includes(appliedCategory);
            }
            return true;
        })
        .filter(prod => prod.name.toLowerCase().includes(filterText.toLowerCase()))
        .filter(prod => {
            const min = appliedMinPrice !== null ? appliedMinPrice : 0;
            const max = appliedMaxPrice !== null ? appliedMaxPrice : Infinity;
            return prod.price > min && prod.price <= max;
        });


    const [favorites, setFavorites] = useState(
        Array(displayedProducts.length).fill(false)
    );

    const [showQuantity, setShowQuantity] = useState(
        Array(displayedProducts.length).fill(false)
    );


    const toggleFavorite = (index) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !newFavorites[index];
        setFavorites(newFavorites);

        const count = newFavorites.filter((item) => item).length;
        setFavoritesCount(count);
    };

    const handleBuyToQuantity = (index) => {
        const newShowQuantity = [...showQuantity];
        newShowQuantity[index] = true;
        setShowQuantity(newShowQuantity);

        const count = newShowQuantity.filter((item) => item).length;
        setCartCount(count);
    };

    return (
        <div className="products">
            {displayedProducts.map((product, index) => (
                <div className="product" key={product.id}>
                    <div className="photo">
                        <img src={product.image} alt={product.name}/>
                        <div className="top-bar">
                            <div className="labels">
                                {product.isSale && <span className="label sale">Sale</span>}
                                {product.isNew && <span className="label new">New</span>}
                            </div>
                            <div className="favorites" onClick={() => toggleFavorite(index)}>
                                <img src={favorites[index] ? heartRed : heart} alt="heart"/>
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
                        {!showQuantity[index] ? (
                            <button className="buy-button" onClick={() => handleBuyToQuantity(index)}>Buy</button>
                        ) : (
                            <div className="quantity">
                                <div className="count-button">-</div>
                                <div className="count">{cartCount}</div>
                                <div className="count-button" onClick={() => handleBuyToQuantity(index)}>+</div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
