import './Shop.css';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Card from '../../components/Card/Card.jsx';
import Sort from '../../components/Sort/Sort.jsx';
import {useState} from 'react';
import Pagination from '../../components/Pagination/Pagination.jsx';
import productsData from '../../../products.json';

const PRODUCTS_PER_PAGE = 12;

const Shop = ({setFavoritesCount, setCartCount, cartCount}) => {
    const [sortProduct, setSortProduct] = useState('RELEVANCE');
    const [currPage, setCurrPage] = useState(1);

    // const firstIndex = (currPage - 1) * PRODUCTS_PER_PAGE
    // const lastIndex = firstIndex + PRODUCTS_PER_PAGE

    const totalPages = Math.ceil(productsData.products.length / PRODUCTS_PER_PAGE)

    const onSortChange = (type) => {
        setSortProduct(type);
        setCurrPage(1);
    };

    return (
        <div className="container">
            <section className="shop">
                <Sidebar/>
                <div className="products-wrapper">
                    <Sort onSortChange={onSortChange}/>
                    <div className="products">
                        <Card
                            setFavoritesCount={setFavoritesCount}
                            setCartCount={setCartCount}
                            cartCount={cartCount}
                            sortProduct={sortProduct}
                            currPage={currPage}
                            productsPerPage={PRODUCTS_PER_PAGE}
                        />
                    </div>
                    {totalPages > 1 && (
                        <Pagination
                            currPage={currPage}
                            totalPages={totalPages}
                            setCurrPage={setCurrPage}
                        />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Shop;
