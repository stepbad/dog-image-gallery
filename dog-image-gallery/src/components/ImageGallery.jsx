import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ImageGallery = ({ images, breed }) => (
  <section aria-label={`Gallery of ${breed}`}>
    {/* Dynamic Message */}
    <div className="gallery-message">
      Please enjoy these images of {breed} dogs.
    </div>
    <div className="gallery">
      {images.map((img, idx) => (
        <motion.figure
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.3 }}
        >
          <img
            src={img}
            alt={`Dog ${idx + 1}`}
            loading="lazy"
            tabIndex="0"
          />
          <figcaption>{`Image ${index + 1} of the ${breed} collection`}</figcaption>
        </motion.figure>
      ))}
    </div>
    {/* Navigation Buttons */}
    <div className="nav-buttons">
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
        >
          Back to Home
        </motion.button>
      </Link>
    </div>
  </section>
);

export default ImageGallery;
