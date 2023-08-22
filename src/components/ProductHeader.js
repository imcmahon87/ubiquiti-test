import iconBack from '../assets/images/icon-back.svg';

const ProductHeader = ({ viewDetails, product }) => {
    return (
        <div id="productHeader">
            <img src={iconBack} alt="Back Icon" onClick={() => { viewDetails(''); }}/>
            <p>{product.product.name}</p>
        </div>
    );
};

export default ProductHeader;