import iconBack from '../assets/images/icon-back.svg';

// ProductHeader is the simple header that replaces the toolbar in a single product view
const ProductHeader = ({ viewDetails, product }) => {
    
    return (
        <div id="productHeader">
            <img src={iconBack} alt="Back Icon" onClick={() => { viewDetails(''); }}/>
            <p>{product.product.name}</p>
        </div>
    );
};

export default ProductHeader;