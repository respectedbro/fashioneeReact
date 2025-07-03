import './SearchComponent.css'
import searchIcon from '../../assets/icons/search.svg';

const SearchComponent = () => {
    return (
        <label>
            <input
                className="input search-row"
                type="text"
                placeholder="Search"
            />
            <img className="search-icon" src={searchIcon} alt="search-icon"/>
        </label>
    )
}

export default SearchComponent