import displayGrid from '../assets/images/toolbar-display-grid-default.svg';
import displayList from '../assets/images/toolbar-display-list-default.svg';

const Filter = () => {
    return (
        <div id="filter">
            <img src={displayGrid} alt="Display as Grid Icon" />
            <img src={displayList} alt="Display as List Icon" />
            <span>Filter</span>
        </div>
    );
};

export default Filter;