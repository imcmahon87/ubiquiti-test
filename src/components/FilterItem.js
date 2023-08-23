// FilterItem component consists of an input and label for each item
const FilterItem = ({ line, handleFilter }) => {

    return (
        <div id="filterItem">
            <input type="checkbox" id={line} onChange={handleFilter} />
            <label htmlFor={line}>{line}</label>
        </div>
    );
};

export default FilterItem;