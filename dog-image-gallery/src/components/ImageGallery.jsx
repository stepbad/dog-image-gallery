import { Link } from 'react-router-dom';

const ImageGallery = ({ images }) => {
  return (
    <div>
      <h1>View Your Gallery</h1>
      <p>Enjoy the images of your selected breed!</p>
      {images.length > 0 ? (
        <div className="gallery">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Dog ${idx}`} />
          ))}
        </div>
      ) : (
        <p>No images to display. Please go back and select a breed.</p>
      )}
      <div className="nav-buttons">
        <Link to="/">
          <button>Choose Again</button>
        </Link>
      </div>
    </div>
  );
};

export default ImageGallery;
