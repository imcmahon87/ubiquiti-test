import useState from 'react';

const Products = () => {
    [isGrid, setIsGrid] = useState(false);
    
    return (
        <div id="productsContainer">
            {isGrid ? (
                <table>
                    <thead>
                        <tr>
                            <td># Devices</td>
                            <td>Product Line</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <td># Devices</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Products;