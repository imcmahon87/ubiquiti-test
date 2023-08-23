import './ProductDetails.css';

/*
ProductDetails component shows a large product image and various details for one product
The nested ternary operators for each product detail check if properties exist within the
JSON database before displaying either the relevant data or a dash for no information
*/
const ProductDetails = ({ product }) => {
    return (
        <div id="productDetails">
            <div id="productDetailsImage">
            <img src={'https://static.ui.com/fingerprint/ui/icons/' +
                product.icon.id + '_' + product.icon.resolutions[4][0] +
                'x' + product.icon.resolutions[4][1] + '.png'} alt={product.line.name} />
            </div>
            <div id="productDetailsText">
                <table>
                    <tbody>
                        <tr>
                            <td className="leftColumn">
                                Product line
                            </td>
                            <td className="rightColumn">
                                {product.line ? product.line.name ? product.line.name : '-' : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="leftColumn">
                                ID
                            </td>
                            <td className="rightColumn">
                                {product.id ? product.id : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="leftColumn">
                                Name
                            </td>
                            <td className="rightColumn">
                                {product.product ? product.product.name ? product.product.name : '-' : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="leftColumn">
                                Short name
                            </td>
                            <td className="rightColumn">
                                {product.shortnames ? product.shortnames[0] : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="leftColumn">
                                Max Power
                            </td>
                            <td className="rightColumn">
                                {product.unifi ? product.unifi.network ? product.unifi.network.radios ? product.unifi.network.radios.na ? product.unifi.network.radios.na.maxPower ? product.unifi.network.radios.na.maxPower : '-' : '-' :'-' : '-' : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="leftColumn">
                                Speed
                            </td>
                            <td className="rightColumn">
                                {product.unifi ? product.unifi.network ? product.unifi.network.ethernetMaxSpeedMegabitsPerSecond ? product.unifi.network.ethernetMaxSpeedMegabitsPerSecond + ' Mbps' : '-' : '-' : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td className="leftColumn">
                                Number of ports
                            </td>
                            <td className="rightColumn">
                                {product.unifi ? product.unifi.network ? product.unifi.network.numberOfPorts ? product.unifi.network.numberOfPorts : '-' : '-' : '-'}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetails;