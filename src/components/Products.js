import './Products.css';
import ProductListView from './ProductListView';
import ProductGridView from './ProductGridView';
import { useState, useEffect } from 'react';

const Products = ({ gridView, searchWord, filterWords, viewDetails }) => {
    const [ isGrid, setIsGrid ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);
    const [ deviceCount, setDeviceCount ] = useState(0);

    useEffect(() => {
        getProducts();
    }, [searchWord, filterWords]);

    useEffect(() => {
        setIsGrid(gridView);
    }, [gridView]);


    const getProducts = () => {
        fetch('https://static.ui.com/fingerprint/ui/public.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
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
                console.log(filteredResults);
                const searchedData = filteredResults.filter((device) =>
                    device.product.name.toLowerCase().includes(searchWord.toLowerCase())
                );
                setProducts(searchedData);
                setDeviceCount(searchedData.length);
                setIsLoading(false);
            } else {    
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
                <p>Loading Data...</p>
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
                                <th className="columnImage">{deviceCount} devices</th>
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