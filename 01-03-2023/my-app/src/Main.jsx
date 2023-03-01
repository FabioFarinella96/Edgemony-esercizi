import "./Main.css";
import "./components/Header";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <Hero />
      <Gallery galleryTitle="Gallery" />
      <ProductsSection
        productsTitle="New products"
        productsSubtitle="Discover all our new products"
      />
      <Footer footerText="Powered with React ❤️" />
    </div>
  );
};

export default Main;
