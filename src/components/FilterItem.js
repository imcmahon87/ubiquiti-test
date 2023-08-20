const FilterItem = ({ line, handleFilter }) => {
    const test = () => {
        console.log('hello');
    };
    return (

        <div id="filterItem">
            <input type="checkbox" id={line} onChange={handleFilter} />
            <label htmlFor={line}>{line}</label>
        </div>
    );
};

export default FilterItem;