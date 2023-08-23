import './Toolbar.css';
import Search from './Search';
import Tools from './Tools';
import Filter from './Filter';
import { useState } from 'react';

// Toolbar component includes search bar, grid/list view buttons, and filter window/functionality
const Toolbar = ({ viewGrid, viewList, handleSearch, handleFilter, clearFilter, gridView, searchWord }) => {

    // Whether window containing filter checkboxes is visible
    const [ filterVisible, setFilterVisible ] = useState(false);

    // handleFilterVisible() called by Filter component
    const handleFilterVisible = () => {
        if (filterVisible) {
            setFilterVisible(false);
        } else {
            setFilterVisible(true);
        }
    };

    return (
        <div id="toolbar">
            <Search  handleSearch={handleSearch} searchWordParent={searchWord} />
            <Tools viewGrid={viewGrid} viewList={viewList} handleFilterVisible={handleFilterVisible} gridView={gridView} />
            <Filter handleFilter={handleFilter} handleFilterVisible={handleFilterVisible} toggleVisible={filterVisible} clearFilter={clearFilter} />
        </div>
    );
};

export default Toolbar;