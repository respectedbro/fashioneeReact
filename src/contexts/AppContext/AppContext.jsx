import {createContext} from 'react';

const AppContext = createContext({
    filterText: '',
    setFilterText: () => {},
    selectedCategory: 'All',
    setSelectedCategory: () => {},
    appliedCategory: 'All',
    setAppliedCategory: () => {}
})

export default AppContext