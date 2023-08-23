// ProductListView component shows a single product in list view
const ProductListView = ({ product, viewDetails }) => {
    
    return (
        <tr className="productListRow" onClick={() => { viewDetails(product); }} >
            <td className="columnImage">
                <img className="listImage" src={'https://static.ui.com/fingerprint/ui/icons/' +
                product.icon.id + '_' + product.icon.resolutions[0][0] +
                'x' + product.icon.resolutions[0][1] + '.png'} alt={product.line.name} />
            </td>
            <td className="columnLine">
                {product.line.name}
            </td>
            <td className="columnName">
                {product.product.name}
            </td>
        </tr>
    );
};

export default ProductListView;