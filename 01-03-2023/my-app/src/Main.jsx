import "./Main.css";
import "./components/Header";
import Header from "./components/Header";
import Hero from "./components/Hero";
import GallerySection from "./components/GallerySection";
import ProductsSection from "./components/ProductsSection";
import Footer from "./components/Footer";
import { useState } from "react";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`Main ${darkMode && "dark__mode"}`}>
      <Header />
      <div className="dark-mode" onClick={() => setDarkMode((prev) => !prev)}>
        {darkMode ? (
          <span class="material-symbols-outlined">brightness_5</span>
        ) : (
          <span class="material-symbols-outlined">nightlight_badge</span>
        )}

        {darkMode ? <p>Light mode</p> : <p>Dark mode</p>}
      </div>
      <Hero />
      <GallerySection galleryTitle="Some of our products" />
      <ProductsSection
        productsTitle="New products"
        productsSubtitle="Discover all our new products"
      />
      <Footer footerText="Powered with React ❤️" />
    </div>
  );
};

export default Main;
