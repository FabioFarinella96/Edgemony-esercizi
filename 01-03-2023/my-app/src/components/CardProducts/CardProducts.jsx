import "./index.css";

const CardProducts = ({ productData, setOpenProductModal }) => {
  const discoverStock = () => alert(`${productData.stock} pezzi disponibili`);

  const onProductClick = () => {
    setOpenProductModal(() => productData);
  };

  return (
    <div className="CardProducts">
      <img src={productData.thumbnail} alt="card " onClick={onProductClick} />
      <h3 className="card-title">{productData.title}</h3>
      <p className="card-price">{productData.price} €</p>
      <button className="product-btn" onClick={discoverStock}>
        Discover
      </button>
    </div>
  );
};

export default CardProducts;
