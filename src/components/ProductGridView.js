const ProductGridView = ({ product, viewDetails }) => {
    return (
        <div className="gridProduct" onClick={() => { viewDetails(product); }}>
            <div className="gridProductHeader">
                <img src={'https://static.ui.com/fingerprint/ui/icons/' +
                product.icon.id + '_' + product.icon.resolutions[3][0] +
                'x' + product.icon.resolutions[3][1] + '.png'} alt={product.line.name} />
            </div>
            <div className="gridProductBody">
                <p>{product.product.name}</p>
                <p className="gridProductLine">{product.line.name}</p>
            </div>
        </div>
    );
};

export default ProductGridView;