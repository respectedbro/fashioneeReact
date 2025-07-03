import heart from '../../assets/icons/heart.svg';
import './CardComponent.css'
import productsData from '../../../products.json';

const CardComponent = () => {
    const displayedProducts = productsData.products.slice(0, 12);

    return (
        <>
            <div className="products">
                {displayedProducts.map((product) =>(
                    <div className="product" key={product.id}>
                        <div className="photo">
                            <img src={product.image} alt={product.name}/>
                            <div className="top-bar">
                                <div className="labels">
                                    {product.isSale && <span className="label sale">Sale</span>}
                                    {product.isNew && <span className="label new">New</span>}
                                </div>
                                <div className="favorites">
                                    <img src={heart} alt="heart"/>
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
        </>
    );
};

export default CardComponent;
