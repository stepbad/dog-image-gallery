import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BreedSelector = ({ setBreed, setNumImages, loading }) => {
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await res.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setBreed(formData.get('breed'));
    setNumImages(formData.get('numImages'));
    navigate('/gallery');
  };

  return (
    <main>
      <h1>Welcome to the Dog Image Gallery</h1>
      <p>Select a breed and the number of images you'd like to explore.</p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Choose Your Breed</legend>
          <label htmlFor="breed">Select Breed:</label>
          <select id="breed" name="breed" required>
            <option value="" disabled selected>
              Choose a breed
            </option>
            {breeds.map((b) => (
              <option key={b} value={b}>
                {b}
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
            {loading ? "Loading..." : <><FaSearch style={{ marginRight: '8px' }} /> Build Your Gallery</>}
          </motion.button>
        </fieldset>
      </form>
    </main>
  );
};

export default BreedSelector;
