import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';

const App = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ database, setDatabase ] = useState([]);
  
  const getDatabase = () => {
    fetch('https://static.ui.com/fingerprint/ui/public.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDatabase(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getDatabase();
  }, []);

  return (
    <>
      <Header />
      <Toolbar />
      <div>
        <h1>Test</h1>
        {isLoading ? (
          <p>Loading data...</p>
        ) : (
          <>
            <p>{database.devices[0].id}</p>
            {<img src={'https://static.ui.com/fingerprint/ui/icons/' +
              database.devices[0].icon.id + '_' + database.devices[0].icon.resolutions[4][0] +
            'x' + database.devices[0].icon.resolutions[4][1] + '.png'} />}
          </>
        )}
        <p>And more</p>
      </div>
    </>
  );
}

export default App;