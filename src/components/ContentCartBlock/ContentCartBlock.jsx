import cartImg from '../../assets/images/no-photo.webp';
import './ContentCartBlock.css'
const ContentCartBlock = ({toggleCart}) => {
    return (
        <section className="hero-section container-1800">
            <div className="title-block">
                <div className="title">
                    <h1>Cart</h1>
                    <div className="menu">
                        <div className="menu-item">
                            <span>Home</span>
                        </div>
                        <div className="menu-item" onClick={() => toggleCart(false)}>
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
    )
}

export default ContentCartBlock