import "./index.css";

const Footer = ({ footerText }) => {
  return (
    <div className="Footer">
      <img
        className="footer-image"
        src="https://img.freepik.com/premium-vector/colorful-pastel-gradient-background-perfect-wallpaper-backdrop-postcard-background_565280-126.jpg"
        alt="footer"
      />
      <h4 className="footer-text">{footerText}</h4>
    </div>
  );
};

export default Footer;
