import "./index.css";

const CardProducts = ({ productData }) => {
  return (
    <div className="CardProducts">
      <img src={productData.thumbnail} alt="card " />
      <h3 className="card-title">{productData.title}</h3>
      <p className="card-price">{productData.price} €</p>
    </div>
  );
};

export default CardProducts;
