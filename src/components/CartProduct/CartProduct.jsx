import "./CartProduct.scss";

const CartProduct = ({ product, onRemove, onQuantityItem }) => {
  return (
    <>
      <div className="product">
        <div className="photo">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <div className="title">{product.name}</div>
          <div className="price-wrapper">
            <div className="price-and-quantity">
              <div className="price">
                {product.oldPrice && (
                  <div className="old-price">
                    ${product.oldPrice.toFixed(2)}
                  </div>
                )}

                <div className="current-price">${product.price.toFixed(2)}</div>
              </div>
              <div className="quantity">
                <div
                  className="count-button"
                  onClick={() =>
                    onQuantityItem(product.id, product.quantity - 1)
                  }
                >
                  -
                </div>
                <div className="count">{product.quantity}</div>
                <div
                  className="count-button"
                  onClick={() =>
                    onQuantityItem(product.id, product.quantity + 1)
                  }
                >
                  +
                </div>
              </div>
            </div>
            <div className="total-price">
              ${(product.price * product.quantity).toFixed(2)}
            </div>
          </div>
          <div className="close" onClick={() => onRemove(product.id)}>
            x
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
