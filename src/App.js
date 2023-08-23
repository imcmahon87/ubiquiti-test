import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Products from './components/Products';
import ProductHeader from './components/ProductHeader';
import ProductDetails from './components/ProductDetails';

// Main App component for Ubiquiti Front-End Test App
const App = () => {

  const [ searchWord, setSearchWord ] = useState('');
  const [ filterWords, setFilterWords ] = useState([]);
  const [ gridView, setGridView ] = useState(false);
  const [ productView, setProductView ] = useState('');

  // handleSearch() is called by the Search component which passes the search word back here
  const handleSearch = (word) => {
    setSearchWord(word);
  }

  /*
  handleFilter() is called by the FilterItem component, which passes the product line filter
  back here in the form of event.target.id. If the box is checked, add the word. Otherwise
  remove it. Products component applies actual filtering logic
  */
  const handleFilter = (event) => {
    let updatedWords = [...filterWords];
    let newWord = event.target.id;
    if (event.target.checked) {
      updatedWords = [...filterWords, newWord];
    } else {
      updatedWords.splice(filterWords.indexOf(newWord), 1);
    }
    setFilterWords(updatedWords);
  };

  const clearFilter = () => {
    setFilterWords([]);
  };

  const viewGrid = () => {
    setGridView(true);
  };

  const viewList = () => {
    setGridView(false);
  };

  const viewDetails = (product) => {
    setProductView(product);
  }

  // Return either individual product view or a list/grid style products view
  return (
    <>
      <Header />
        {productView ? (
          <>
            <ProductHeader viewDetails={viewDetails} product={productView} />
            <div id="contentWrapper">
              <ProductDetails product={productView} />
            </div>
          </>
        ) : (
          <>
            <Toolbar viewGrid={viewGrid} viewList={viewList} handleSearch={handleSearch} handleFilter={handleFilter} clearFilter={clearFilter} gridView={gridView} searchWord={searchWord} />
            <div id="contentWrapper">
              <Products gridView={gridView} searchWord={searchWord} filterWords={filterWords} viewDetails={viewDetails} />
            </div>
          </>
        )
        }
    </>
  );
}

export default App;