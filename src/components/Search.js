import iconSearch from '../assets/images/icon-search.svg';
import { useState } from 'react';

const Search = ({ handleSearch }) => {

    const [searchWord, setSearchWord] = useState('');

    const updateSearchWord = (event) => {
        setSearchWord(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(searchWord);
        }
    };

    return (
        <div id="search">
            <img src={iconSearch} alt="Search Icon" onClick={() => handleSearch(searchWord)} />
            <input type="text" placeholder="Search" onChange={updateSearchWord} onKeyDown={handleKeyDown} />
        </div>
    );
};

export default Search;