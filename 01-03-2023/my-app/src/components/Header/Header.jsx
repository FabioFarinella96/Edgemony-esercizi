import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="header-title">Tech-commerce</h1>
      <ul className="nav-bar">
        <a href="https://www.google.it/">Home</a>
        <a href="https://www.youtube.com/">Products</a>
        <a href="https://twitter.com/">Contacts</a>
      </ul>
    </div>
  );
};

export default Header;
