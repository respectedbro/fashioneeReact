import searchIcon from '../../assets/icons/search.svg';
import './Search.css'
import {useContext} from 'react';
import AppContext from '../../contexts/AppContext/AppContext.jsx';
const Search = () => {
    const {filterText, setFilterText} = useContext(AppContext)

    const handleChange = (e) => {
        setFilterText(e.target.value.toLowerCase())
    }

    return (
        <div className="search">
            <label>
                <input
                    className="input search-row"
                    type="text"
                    placeholder="Search"
                    value={filterText}
                    onChange={handleChange}
                />
                <img className="search-icon" src={searchIcon} alt="search-icon"/>
            </label>
        </div>
    )
}

export default Search