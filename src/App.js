import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Products from './components/Products';
import ProductHeader from './components/ProductHeader';
import ProductDetails from './components/ProductDetails';

const App = () => {

  const [ searchWord, setSearchWord ] = useState('');
  const [ filterWords, setFilterWords ] = useState([]);
  const [ gridView, setGridView ] = useState(false);
  const [ productView, setProductView ] = useState('');

  const handleSearch = (word) => {
    setSearchWord(word);
  }

  const handleFilter = (event) => {
    let updatedWords = [...filterWords];
    let newWord = event.target.id;
    if (event.target.checked) {
      updatedWords = [...filterWords, newWord];
    } else {
      updatedWords.splice(filterWords.indexOf(newWord), 1);
    }
    console.log(updatedWords);
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