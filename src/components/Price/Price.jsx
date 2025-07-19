import './Prise.css';
import AppContext from '../../contexts/AppContext/AppContext.jsx';
import {useContext} from 'react';


const Price = () => {
    const {
        minPrice, setMinPrice,
        maxPrice, setMaxPrice
    } = useContext(AppContext);


    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Price</div>
            <div className="sidebar-content">
                <div className="price-bar">
                    <input
                        className="input"
                        type="number"
                        placeholder="0"
                        value={minPrice || ''}
                        onChange={(e) => setMinPrice(e.target.value) || 0}
                    />
                    <input
                        className="input"
                        type="number"
                        placeholder="250"
                        value={maxPrice || ''}
                        onChange={(e) => setMaxPrice(e.target.value) || Infinity}
                    />
                </div>
            </div>
        </div>
    );
};

export default Price;