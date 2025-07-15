import {createContext} from 'react';

const AppContext = createContext({
    filterProduct: '',
    setFilterProduct: () => {}
})

export default AppContext