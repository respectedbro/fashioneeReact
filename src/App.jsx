import './App.css';
import ShopComponent from './pages/Shop/ShopComponent.jsx';
import HeaderComponent from './components/Header/HeaderComponent.jsx';
import ContentShopBlock from './components/ContentShopBlock/ContentShopBlock.jsx';
import FooterComponent from './components/Footer/FooterComponent.jsx';
import Cart from './pages/Cart/Cart.jsx';
import {useState} from 'react';
import ContentCartBlock from './components/ContentCartBlock/ContentCartBlock.jsx';

function App() {
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <HeaderComponent toggleCart={setShowCart}/>
            {showCart ? (
                <ContentCartBlock toggleCart={setShowCart} />
            ) : (
                <ContentShopBlock toggleCart={setShowCart} />
            )}
            {showCart ? <Cart /> : <ShopComponent />}
            <FooterComponent />
        </>
    );
}

export default App;
