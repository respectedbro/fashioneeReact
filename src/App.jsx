import './App.css';
import Shop from './pages/Shop/Shop.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cart from './pages/Cart/Cart.jsx';
import ContentBlock from './components/ContentBlock/ContentBlock.jsx';
import {useState} from 'react';

function App() {
    const [currentPage, setCurrentPage] = useState('Shop');
    const [favoritesCount, setFavoritesCount] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    return (
        <>
            <Header setCurrentPage={setCurrentPage} favoritesCount={favoritesCount}
                    cartCount={cartCount}
            />
            <ContentBlock currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {currentPage === 'Shop' && <Shop setFavoritesCount={setFavoritesCount}
                                             setCartCount={setCartCount}
                                             cartCount={cartCount}
            />}
            {currentPage === 'Cart' && <Cart/>}

            <Footer/>
        </>
    );
}

export default App;
