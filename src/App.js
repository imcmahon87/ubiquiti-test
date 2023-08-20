import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Products from './components/Products';

const App = () => {
  const [ searchWord, setSearchWord ] = useState('');
  const [ filterWords, setFilterWords ] = useState([]);

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
  }

  return (
    <>
      <Header />
      <Toolbar handleSearch={handleSearch} handleFilter={handleFilter} clearFilter={clearFilter} />
      <Products searchWord={searchWord} filterWords={filterWords} />
    </>
  );
}

export default App;