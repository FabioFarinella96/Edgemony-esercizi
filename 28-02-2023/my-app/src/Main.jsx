import "./main.css";
import "./components/Header";
import Header from "./components/Header";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <ProductsSection
        productsTitle="New products"
        productsSubtitle="Discover all our new products"
      />
      <Footer footerText="Powered with React ❤️" />
    </div>
  );
};

export default Main;
