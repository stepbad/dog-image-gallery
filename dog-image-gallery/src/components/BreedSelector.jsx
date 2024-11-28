import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BreedSelector = ({ setBreed, setNumImages, loading }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(''); // Controlled state for dropdown
  const navigate = useNavigate();

  // Fetch list of breeds
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await res.json();
        setBreeds(Object.keys(data.message)); // Extract breed names
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setBreed(selectedBreed); // Use the controlled state for the breed
    setNumImages(formData.get('numImages'));
    navigate('/gallery');
  };

  return (
    <main>
      <div className="magnify-container">
        <h1>Welcome to the Dog Image Gallery</h1>
        <p>Select a breed and the number of images you'd like to explore.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Choose Your Breed</legend>
          <label htmlFor="breed">Select Breed:</label>
          <select
            id="breed"
            name="breed"
            value={selectedBreed} // Controlled input
            onChange={(e) => setSelectedBreed(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose a breed
            </option>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <label htmlFor="numImages">Number of Images:</label>
          <input
            id="numImages"
            type="number"
            name="numImages"
            min="1"
            max="100"
            defaultValue="5"
            required
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={loading}
          >
            <FaSearch style={{ marginRight: '8px' }} />
            {loading ? 'Loading...' : 'Build Your Gallery'}
          </motion.button>
        </fieldset>
      </form>
    </main>
  );
};

export default BreedSelector;
