import "./index.css";

const Gallery = ({ galleryTitle }) => {
  const galleryImages = [
    "https://specials-images.forbesimg.com/imageserve/63696da41393ef725d42ae51/Apple-TV-4K/960x0.jpg?cropX1=0&cropX2=1200&cropY1=0&cropY2=627",
    "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2017/12/p-1-the-cleverest-tech-ideas-of-2017.jpg",
    "https://images.immediate.co.uk/production/volatile/sites/4/2022/12/Meta-Quest-32f5cdf.jpg?quality=90&resize=700,335",
    "https://cdn.hiconsumption.com/wp-content/uploads/2021/12/Anker-Portable-Charger.jpg",
  ];

  return (
    <div className="Gallery">
      <div className="gallery-header">
        <h1 className="gallery-title">{galleryTitle}</h1>
      </div>
      <div className="gallery-section">
        <div className="section-up">
          <img src={galleryImages[0]} alt="gallery" />
          <img src={galleryImages[1]} alt="gallery" />
        </div>
        <div className="section-down">
          <img src={galleryImages[2]} alt="gallery" />
          <img src={galleryImages[3]} alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
