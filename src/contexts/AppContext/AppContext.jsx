import {createContext} from 'react';

const AppContext = createContext({
    filterText: '',
    setFilterText: () => {},
    selectedCategory: 'All',
    setSelectedCategory: () => {},
    appliedCategory: 'All',
    setAppliedCategory: () => {},
    minPrice: 0,
    setMinPrice: () => {},
    maxPrice: 250,
    setMaxPrice: () => {},
    appliedMinPrice: 0,
    setAppliedMinPrice: () => {},
    appliedMaxPrice: 250,
    setAppliedMaxPrice: () => {},
    selectColors: [],
    setSelectColors: () => {},
    appliedColors: [],
    setAppliedColors: () => {}
})

export default AppContext