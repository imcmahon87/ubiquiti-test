import displayGrid from '../assets/images/toolbar-display-grid-default.svg';
import displayList from '../assets/images/toolbar-display-list-default.svg';

const Tools = ({ handleFilterVisible }) => {
    return (
        <div id="tools">
            <img src={displayGrid} alt="Grid View Icon" />
            <img src={displayList} alt="List View Icon" />
            <span onClick={handleFilterVisible}>Filter</span>
        </div>
    );
};

export default Tools;