const ProductDetails = ({ product }) => {
    return (
        <div id="productDetails">
            <div id="productDetailsImage">
            <img src={'https://static.ui.com/fingerprint/ui/icons/' +
                product.icon.id + '_' + product.icon.resolutions[4][0] +
                'x' + product.icon.resolutions[4][1] + '.png'} />
            </div>
            <div id="productDetailsText">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Product line
                            </td>
                            <td>
                                {product.line.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ID
                            </td>
                            <td>
                                {product.id}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                {product.product.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Short name
                            </td>
                            <td>
                                {product.shortnames[0]}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Max Power
                            </td>
                            <td>
                                {product.id}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Speed
                            </td>
                            <td>
                                {product.hasOwnProperty('unifi.network.ethernetMaxSpeedMegabitsPerSecond') ? ( product.unifi.network.ethernetMaxSpeedMegabitsPerSecond ) :
                                    ('nothing there')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Number of ports
                            </td>
                            <td>
                                {product.hasOwnProperty('unifi.network.numberOfPorts') ? ( product.unifi.network.numberOfPorts ) :
                                    ('nothing there')}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetails;