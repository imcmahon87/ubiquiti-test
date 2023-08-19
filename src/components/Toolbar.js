import './Toolbar.css';
import Search from './Search';
import Filter from './Filter';

const Toolbar = () => {
    return (
        <div id="toolbar">
            <Search />
            <Filter />
        </div>
    );
};

export default Toolbar;