import './SidebarComponent.css'
import sidebar from '../../assets/images/season-sale-banner.svg';
import searchIcon from '../../assets/icons/search.svg';


const SidebarComponent = () => {
    return (
        <div className="sidebar">
            <div className="search">
                <label>
                    <input
                        className="input search-row"
                        type="text"
                        placeholder="Search"
                    />
                    <img className="search-icon" src={searchIcon} alt="search-icon"/>
                </label>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Categories</div>
                <div className="sidebar-content">
                    <ul className="custom-list">
                        <li className="item">All</li>
                        <li className="item active">Men</li>
                        <li className="item">Women</li>
                        <li className="item">Accessories</li>
                        <li className="item">New Arrivals</li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Price</div>
                <div className="sidebar-content">
                    <div className="price-bar">
                        <input className="input" type="text" placeholder="0"/>
                        <input className="input" type="text" placeholder="200"/>
                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Colors</div>
                <div className="sidebar-content">
                    <div className="colors">
                        <div className="color">
                            <input
                                className="color-checkbox"
                                type="checkbox"
                                name="black"
                                id="black"
                                value="black"
                            />
                            <label className="color-name" htmlFor="black">
                                Black
                            </label>
                        </div>
                        <div className="color">
                            <input
                                className="color-checkbox"
                                type="checkbox"
                                name="blue"
                                id="blue"
                                value="blue"
                            />
                            <label className="color-name" htmlFor="blue">
                                Blue
                            </label>
                        </div>
                        <div className="color">
                            <input
                                className="color-checkbox"
                                type="checkbox"
                                name="red"
                                id="red"
                                value="red"
                            />
                            <label className="color-name" htmlFor="red">
                                Red
                            </label>
                        </div>
                        <div className="color">
                            <input
                                className="color-checkbox"
                                type="checkbox"
                                name="yellow"
                                id="yellow"
                                value="yellow"
                            />
                            <label className="color-name" htmlFor="yellow">
                                Yellow
                            </label>
                        </div>
                        <div className="color">
                            <input
                                className="color-checkbox"
                                type="checkbox"
                                name="green"
                                id="green"
                                value="green"
                            />
                            <label className="color-name" htmlFor="green">
                                Green
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button className="button">Apply Filter</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">Reviewed By You</div>
                <div className="sidebar-content">
                    <div className="reviewed-products">
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Retro style handbag</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                    <div className="old-price">$52.99</div>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Warm casual sweater</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Textured turtleneck with zip</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a href="#">
                    <img src={sidebar} alt="season-sale-banner"/>
                </a>
            </div>
        </div>
    );
};

export default SidebarComponent;
