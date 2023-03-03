import "./index.css";

const ProductModal = ({ product, setOpenProductModal }) => {
  return (
    <div className="ProductModal">
      <div className="modal-content">
        <img src={product.images[0]} alt={product.title} />
        <button
          className="modal-button"
          onClick={() => setOpenProductModal(null)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
