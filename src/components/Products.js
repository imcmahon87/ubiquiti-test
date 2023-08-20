import './Products.css';
import ProductListView from './ProductListView';
import ProductGridView from './ProductGridView';
import { useState, useEffect } from 'react';

const Products = ({ searchWord, filterWords }) => {
    const [ isGrid, setIsGrid ] = useState(true);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);

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
                setIsLoading(false);
            } else {    
                const searchedData = data.devices.filter((device) =>
                    device.product.name.toLowerCase().includes(searchWord.toLowerCase())
                );
                setProducts(searchedData);
                setIsLoading(false);
            }
          });
    }

    useEffect(() => {
        getProducts();
    }, [searchWord, filterWords]);

    return (
        <div id="productsContainer">
            {isLoading ? (
                <p>Loading Data...</p>
            ) : (
                isGrid ? (
                    <>
                        <span># Devices</span>
                        <div id="gridContainer">
                            {products.map((product) => {
                                return (
                                    <ProductGridView product={product} key={product.id} />
                                );
                            })
                            }
                        </div>
                    </>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <td># Devices</td>
                                <td>Product Line</td>
                                <td>Name</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => {
                                return (
                                    <ProductListView product={product} key={product.id}/>
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