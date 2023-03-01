import "./index.css";
import { data } from "../../mocks/data";
import CardProducts from "../CardProducts";

const ProductsSection = ({ productsTitle, productsSubtitle }) => {
  return (
    <div className="Products">
      <div className="products-header">
        <h1 className="products-title">{productsTitle}</h1>
        <p className="products-subtitle">{productsSubtitle}</p>
      </div>
      <div className="products-list">
        {data.map((product) => (
          <CardProducts productData={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
