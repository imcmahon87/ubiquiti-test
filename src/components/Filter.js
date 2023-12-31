import iconClose from '../assets/images/icon-close.svg';
import FilterItem from './FilterItem';
import { useState, useEffect } from 'react';

// Filter component is the small window with a checkbox for each product line
const Filter = ({ handleFilterVisible, toggleVisible, handleFilter, clearFilter }) => {

    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
        if (toggleVisible) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [toggleVisible]
    );

    return (
        isVisible ? (
            <div id="filter">
                <div id="filterHeader">
                    <span>Filter</span>
                    <img id="closeImg" src={iconClose} alt="Close Icon" onClick={() => { handleFilterVisible(); clearFilter(); }} />
                </div>
                <div id="filterBody">
                    <p>Product Line</p>
                    <FilterItem line="UniFi" handleFilter={handleFilter} />
                    <FilterItem line="UniFi LTE" handleFilter={handleFilter} />
                    <FilterItem line="UniFi Protect" handleFilter={handleFilter} />
                    <FilterItem line="UniFi Access" handleFilter={handleFilter} />
                    <FilterItem line="airMax" handleFilter={handleFilter} />
                    <FilterItem line="EdgeMax" handleFilter={handleFilter} />
                </div>
            </div>
        ) : (
            <>
            </>
        )
    );
};

export default Filter;