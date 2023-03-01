import "./index.css";

const CardProducts = ({ productData }) => {
  const discoverStock = () => alert(`${productData.stock} pezzi disponibili`);

  return (
    <div className="CardProducts">
      <img src={productData.thumbnail} alt="card " />
      <h3 className="card-title">{productData.title}</h3>
      <p className="card-price">{productData.price} €</p>
      <button className="product-btn" onClick={discoverStock}>
        Discover
      </button>
    </div>
  );
};

export default CardProducts;
