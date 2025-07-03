import './Cart.css'
import cartImg from '../../assets/images/no-photo.webp'
import arrowWhite from '../../assets/icons/arrow-white.svg'

import HeaderComponent from '../../components/Header/HeaderComponent.jsx';
const Cart = () => {
    return (
        <>
        <HeaderComponent/>
    <section className="hero-section container-1800">
        <div className="title-block">
            <div className="title">
                <h1>Cart</h1>
                <div className="menu">
                    <div className="menu-item">
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <span>Shop</span>
                    </div>
                    <div className="menu-item active">
                        <span>Cart</span>
                    </div>
                </div>
            </div>

            <div className="hero-line"></div>
        </div>
        <div className="hero-image">
            <img src={cartImg} alt="photo"/>
        </div>
    </section>

    <div className="container">
        <div className="cart">
            <div className="order-wrapper">
                <div className="product-list">
                    <div className="product">
                        <div className="photo"></div>
                        <div className="product-info">
                            <div className="title">Fashionee - Cotton Shirt (S)</div>
                            <div className="price-wrapper">
                                <div className="price-and-quantity">
                                    <div className="price">
                                        <div className="old-price">$52.99</div>
                                        <div className="current-price">$35.99</div>
                                    </div>
                                    <div className="quantity">
                                        <div className="count-button">-</div>
                                        <div className="count">1</div>
                                        <div className="count-button">+</div>
                                    </div>
                                </div>
                                <div className="total-price">
                                    $35.99
                                </div>
                            </div>
                            <div className="close">x</div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="photo"></div>
                        <div className="product-info">
                            <div className="title">Spray wrap skirt</div>
                            <div className="price-wrapper">
                                <div className="price-and-quantity">
                                    <div className="price">
                                        <div className="current-price">$110.99</div>
                                    </div>
                                    <div className="quantity">
                                        <div className="count-button">-</div>
                                        <div className="count">1</div>
                                        <div className="count-button">+</div>
                                    </div>
                                </div>
                                <div className="total-price">
                                    $110.99
                                </div>
                            </div>
                            <div className="close">x</div>
                        </div>
                    </div>
                </div>
                <div className="order">
                    <div className="title">Your Order</div>
                    <div className="order-price-wrapper">
                        <div className="price-row">
                            <div className="name">Order price</div>
                            <div className="price">$146.98</div>
                        </div>
                        <div className="price-row">
                            <div className="name">Discount for promo code</div>
                            <div>No</div>
                        </div>
                        <div className="price-row delimiter">
                            <div className="name">
                                Delivery <span className="additional">(Aug 02 at 16:00)</span>
                            </div>
                            <div className="price">$16</div>
                        </div>
                        <div className="price-row total">
                            <div className="name">Total</div>
                            <div className="price">$162.98</div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button className="button">Checkout</button>
                        <div className="vertical-line"></div>
                    </div>
                </div>
            </div>
            <div className="promo-code-wrapper">
                <div className="info">
                    <div className="title">You Have A Promo Code?</div>
                    <div className="description">To receive up-to-date promotional codes, subscribe to us on social networks.
                    </div>
                </div>
                <div className="promo-code">
                    <input className="input" type="text" name="promo-code" placeholder="Enter promo code"/>
                        <div className="button-wrapper">
                            <button className="button">
                                <img src={arrowWhite} alt="arrow-icon"/>
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
        </div>
    </div>
    </>
    )
}

export default Cart
