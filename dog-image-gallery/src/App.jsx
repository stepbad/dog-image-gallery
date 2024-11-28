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
  const [numImages, setNumImages] = useState(5);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    if (breed) {
      setLoading(true);
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`);
        const data = await res.json();
        setImages(data.message || []);
      } catch (error) {
        console.error('Error fetching images:', error);
        setImages([]);
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
                  transition={{ duration: 0.5 }}
                >
                  <BreedSelector setBreed={setBreed} setNumImages={setNumImages} />
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
                  transition={{ duration: 0.5 }}
                >
                  {loading ? <div className="loader"></div> : <ImageGallery images={images} />}
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
