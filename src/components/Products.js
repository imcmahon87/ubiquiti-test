import './Products.css';
import ProductListView from './ProductListView';
import ProductGridView from './ProductGridView';
import { useState, useEffect } from 'react';

// Products component fetches product data and displays it in either a list or grid view
const Products = ({ gridView, searchWord, filterWords, viewDetails }) => {

    const [ isGrid, setIsGrid ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);
    const [ deviceCount, setDeviceCount ] = useState(0);

    useEffect(() => {
        getProducts();
    });

    // If gridView is true then show products in grid view
    useEffect(() => {
        setIsGrid(gridView);
    }, [gridView]);

    /* 
    getProducts() fetches the product data from a JSON file and applies search/filter criteria
    to the results. Then it sets isLoading to false, letting the JSX render the appropriate view
    */ 
    const getProducts = () => {
        fetch('https://static.ui.com/fingerprint/ui/public.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // If product line filters exist, use them before applying search word filters
            if (filterWords.length > 0) {
                let filteredResults = [];
                for (let i = 0; i < filterWords.length; i++) {
                    const filteredData = data.devices.filter((device) =>
                        device.line.name.toLowerCase().match('^' + filterWords[i].toLowerCase() + '$')
                    );
                    for (let j = 0; j < filteredData.length; j++) {
                        filteredResults.push(filteredData[j]);
                    }
                }
                const searchedData = filteredResults.filter((device) =>
                    device.product.name.toLowerCase().includes(searchWord.toLowerCase())
                );
                setProducts(searchedData);
                setDeviceCount(searchedData.length);
                setIsLoading(false);
            } else {
                // If no product line filters exist, just apply search word criteria    
                const searchedData = data.devices.filter((device) =>
                    device.product.name.toLowerCase().includes(searchWord.toLowerCase())
                );
                setProducts(searchedData);
                setDeviceCount(searchedData.length);
                setIsLoading(false);
            }
          });
    }

    return (
        <div id="productsContainer">
            {isLoading ? (
                <p id="loadingText">Loading Data...</p>
            ) : (
                isGrid ? (
                    <>
                        <div id="gridContainer">
                            <p id="gridNumberDevices">{deviceCount} devices</p>
                            {products.map((product) => {
                                return (
                                    <ProductGridView key={product.id} product={product} viewDetails={viewDetails}/>
                                );
                            })
                            }
                        </div>
                    </>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th className="columnImage"><p id="listNumberDevices">{deviceCount} devices</p></th>
                                <th className="columnLine">PRODUCT LINE</th>
                                <th className="columnName">NAME</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => {
                                return (
                                    <ProductListView key={product.id} product={product} viewDetails={viewDetails} />
                                );
                            })
                            }
                        </tbody>
                    </table>
                )
            )}
        </div>
    );
};

export default Products;