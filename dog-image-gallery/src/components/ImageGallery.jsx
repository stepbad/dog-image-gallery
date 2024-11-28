import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ImageGallery = ({ images }) => (
  <div>
    <h1>View Your Gallery</h1>
    <p>Enjoy the images of your selected breed!</p>
    {images.length > 0 ? (
      <div className="gallery">
        {images.map((img, idx) => (
          <motion.img
            key={idx}
            src={img}
            alt={`Dog ${idx}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
          />
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

export default ImageGallery;
