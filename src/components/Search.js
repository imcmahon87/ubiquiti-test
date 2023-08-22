import iconSearch from '../assets/images/icon-search.svg';
import iconClose from '../assets/images/icon-close.svg';
import { useState, useRef } from 'react';

const Search = ({ handleSearch, searchWordParent }) => {

    const [searchWord, setSearchWord] = useState('');

    const ref = useRef(null);

    const updateSearchWord = (event) => {
        setSearchWord(event.target.value);
    };

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
            <img src={iconSearch} alt="Search Icon" onClick={() => handleSearch(searchWord)} />
            <input ref={ref} type="text" placeholder={searchWordParent ? searchWordParent : "Search"} onChange={updateSearchWord} onKeyDown={handleKeyDown} />
            <img src={iconClose} alt="Clear Search Icon" onClick={clearSearch} />
        </div>
    );
};

export default Search;