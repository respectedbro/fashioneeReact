import { createContext } from "react";

const AppContext = createContext({
  currPage: 1,
  setCurrPage: () => {},
  filterText: "",
  setFilterText: () => {},
  selectedCategory: "All",
  setSelectedCategory: () => {},
  appliedCategory: "All",
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
  setAppliedColors: () => {},
  cartItems: [],
  setCartItems: () => {},
  promoApplied: false,
  setPromoApplied: () => {},
});

export default AppContext;
