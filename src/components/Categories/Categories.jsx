import './Categories.css';
import {useContext} from 'react';
import AppContext from '../../contexts/AppContext/AppContext.jsx';
import productsData from '../../../products.json'
const Categories = () => {
    const {
        selectedCategory,
        setSelectedCategory,
        appliedCategory,
        setAppliedCategory
    } = useContext(AppContext);

    const allCategories = ['All']
    productsData.products.forEach(prod => {
        prod.categories.forEach(category => {
            if (allCategories.includes(category) === false) {
                allCategories.push(category)
            }
        })
    })

    const handleApplyFilters = () => {
        setAppliedCategory(selectedCategory)
    }
    return (
        <>
            <div className="sidebar-item">
                <div className="sidebar-title">Categories</div>
                <div className="sidebar-content">
                    <ul className="custom-list">
                        {allCategories.map(category => (
                            <li
                            key={category}
                            className={`item ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() =>setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
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
                    <button className="button" onClick={handleApplyFilters}>Apply Filter</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
        </>
    );
};

export default Categories;