import searchIcon from "../../assets/icons/search.svg";
import "./Search.css";
import { useCallback, useContext, useState } from "react";
import AppContext from "../../contexts/AppContext/AppContext.jsx";
import { debounce } from "lodash";

const Search = () => {
  const { filterText, setFilterText } = useContext(AppContext);
  const [localValue, setLocalValue] = useState(filterText);

  const debounceText = useCallback(
    debounce((value) => {
      setFilterText(value);
    }, 500),
    [setFilterText]
  );

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setLocalValue(value);
    debounceText(value);
  };

  return (
    <div className="search">
      <label>
        <input
          className="input search-row"
          type="text"
          placeholder="Search"
          value={localValue}
          onChange={handleChange}
        />
        <img className="search-icon" src={searchIcon} alt="search-icon" />
      </label>
    </div>
  );
};

export default Search;
