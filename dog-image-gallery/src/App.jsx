  {/*
        Stephen Badcock sd12 qap3, dog-image-gallery from dogCEOapi.
        2024-11-30
      */}
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import './style.css';

function App() {
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(12);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchImages = async () => {
    if (breed) {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`);
        const data = await res.json();
        if (data.status === 'success') {
          setImages(data.message || []);
        } else {
          throw new Error('Failed to fetch images');
        }
      } catch (err) {
        setError('Unable to fetch images. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchImages();
  }, [breed, numImages]);

  return (
    <Router>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.8 }}
                >
                  <BreedSelector
                    setBreed={setBreed}
                    setNumImages={setNumImages}
                    loading={loading}
                  />
                </motion.div>
              }
            />
            <Route
              path="/gallery"
              element={
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                >
                  {loading ? (
                    <div className="loader"></div>
                  ) : error ? (
                    <p className="error-message">{error}</p>
                  ) : (
                    <ImageGallery images={images} breed={breed} />
                  )}
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
