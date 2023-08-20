const ProductListView = ({ product }) => {
    return (
        <tr>
            <td>
                <img src={'https://static.ui.com/fingerprint/ui/icons/' +
                product.icon.id + '_' + product.icon.resolutions[0][0] +
                'x' + product.icon.resolutions[0][1] + '.png'} />
            </td>
            <td>
                {product.line.name}
            </td>
            <td>
                {product.product.name}
            </td>
        </tr>
    );
};

export default ProductListView;