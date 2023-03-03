import "./index.css";
import { useState, useEffect } from "react";
import CardProducts from "../CardProducts";

const ProductsSection = ({ productsTitle, setOpenProductModal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <div className="ProductsSection">
      <div className="products-header">
        <h1 className="products-title">{productsTitle}</h1>
        <div className="filter-buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
      <div className="products-list">
        {data.map((product) => (
          <CardProducts
            productData={product}
            setOpenProductModal={setOpenProductModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
