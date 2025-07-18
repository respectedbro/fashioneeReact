import './Categories.css';
import {useContext} from 'react';
import AppContext from '../../contexts/AppContext/AppContext.jsx';
import productsData from '../../../products.json'
const Categories = () => {
    const {selectedCategory, setSelectedCategory} = useContext(AppContext);

    const allCategories = ['All']
    productsData.products.forEach(prod => {
        prod.categories.forEach(category => {
            if (allCategories.includes(category) === false) {
                allCategories.push(category)
            }
        })
    })

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Categories</div>
            <div className="sidebar-content">
                <ul className="custom-list">
                    {allCategories.map(category => (
                        <li
                            key={category}
                            className={`item ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Categories;