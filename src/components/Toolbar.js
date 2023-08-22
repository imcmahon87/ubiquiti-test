import './Toolbar.css';
import Search from './Search';
import Tools from './Tools';
import Filter from './Filter';
import { useState } from 'react';

const Toolbar = ({ viewGrid, viewList, handleSearch, handleFilter, clearFilter, gridView, searchWord }) => {

    const [ filterVisible, setFilterVisible ] = useState(false);

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