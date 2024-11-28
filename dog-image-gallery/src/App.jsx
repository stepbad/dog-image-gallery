import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BreedSelector from './components/BreedSelector';
import ImageGallery from './components/ImageGallery';
import './style.css';

function App() {
  const [breed, setBreed] = useState('');
  const [numImages, setNumImages] = useState(5);
  const [images, setImages] = useState([]);

  // Function to fetch images
  const fetchImages = async () => {
    if (breed) {
      try {
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/${numImages}`);
        const data = await res.json();
        setImages(data.message || []);
      } catch (error) {
        console.error('Error fetching images:', error);
        setImages([]);
      }
    }
  };

  // Fetch images when breed or number of images changes
  useEffect(() => {
    fetchImages();
  }, [breed, numImages]);

  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<BreedSelector setBreed={setBreed} setNumImages={setNumImages} />} />
          <Route path="/gallery" element={<ImageGallery images={images} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
