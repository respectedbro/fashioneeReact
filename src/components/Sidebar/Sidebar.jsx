import './Sidebar.css';
import sidebar from '../../assets/images/season-sale-banner.svg';
import Search from '../Search/Search.jsx';
import Categories from '../Categories/Categories.jsx';
import {useContext} from 'react';
import AppContext from '../../contexts/AppContext/AppContext.jsx';
import Price from '../Price/Price.jsx';


const Sidebar = () => {
    const {
        selectedCategory,
        setAppliedCategory,
        minPrice,
        setAppliedMinPrice,
        maxPrice,
        setAppliedMaxPrice

    } = useContext(AppContext);

    const handleApplyFilters = () => {
        setAppliedCategory(selectedCategory);
        setAppliedMinPrice(minPrice);
        setAppliedMaxPrice(maxPrice);
    };
    return (
        <div className="sidebar">
            <Search/>
            <Categories/>
            <Price/>
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
                    <button className="button" onClick={handleApplyFilters}>Apply Filter</button>
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

export default Sidebar;
