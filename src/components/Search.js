import iconSearch from '../assets/images/icon-search.svg';
import iconClose from '../assets/images/icon-close.svg';
import { useState, useRef } from 'react';

// Search component includes text input, search icon, and an 'x' icon for clearing search
const Search = ({ handleSearch, searchWordParent }) => {
    
    const [searchWord, setSearchWord] = useState('');

    // Used in clearSearch() to refer to input box to be cleared
    const ref = useRef(null);

    const updateSearchWord = (event) => {
        setSearchWord(event.target.value);
    };

    // For pressing 'Enter' instead of clicking search icon
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(searchWord);
        }
    };

    const clearSearch = () => {
        ref.current.value = '';
        setSearchWord('');
        handleSearch('');
    };

    return (
        <div id="search">
            <img id="searchImg" src={iconSearch} alt="Search Icon" onClick={() => handleSearch(searchWord)} />
            <input ref={ref} type="text" placeholder={searchWordParent ? searchWordParent : "Search"} onChange={updateSearchWord} onKeyDown={handleKeyDown} />
            <img id="closeImg" src={iconClose} alt="Clear Search Icon" onClick={clearSearch} />
        </div>
    );
};

export default Search;