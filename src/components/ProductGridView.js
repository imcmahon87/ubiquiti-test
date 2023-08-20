const ProductGridView = ({ product }) => {
    return (
        <div className="gridProduct">
            <img src={'https://static.ui.com/fingerprint/ui/icons/' +
            product.icon.id + '_' + product.icon.resolutions[3][0] +
            'x' + product.icon.resolutions[3][1] + '.png'} /><br />
            {product.product.name}<br />
            {product.line.name}
        </div>
    );
};

export default ProductGridView;