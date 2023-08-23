import displayGrid from '../assets/images/icon-display-grid-default.svg';
import displayGridActive from '../assets/images/icon-display-grid-active.svg';
import displayList from '../assets/images/icon-display-list-default.svg';
import displayListActive from '../assets/images/icon-display-list-active.svg';

// Tools component consists of grid/list view icons and filter window toggle button
const Tools = ({ viewGrid, viewList, handleFilterVisible, gridView }) => {
    
    return (
        <div id="tools">
            <img src={gridView ? displayGridActive : displayGrid} alt="Grid View Icon" onClick={viewGrid} />
            <img src={gridView ? displayList : displayListActive} alt="List View Icon" onClick={viewList} />
            <p onClick={handleFilterVisible}>Filter</p>
        </div>
    );
};

export default Tools;