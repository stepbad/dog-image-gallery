import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BreedSelector = ({ setBreed, setNumImages }) => {
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  // Fetch the list of breeds on component mount
  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const res = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await res.json();
        setBreeds(Object.keys(data.message));
      } catch (error) {
        console.error('Error fetching breeds:', error);
        setBreeds([]);
      }
    };

    fetchBreeds();
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setBreed(formData.get('breed'));
    setNumImages(formData.get('numImages'));
    navigate('/gallery'); // Redirect to the gallery page
  };

  return (
    <div>
      <h1>Choose Your Breed</h1>
      <p>Select a breed and specify the number of images to build your gallery.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Select Breed:
          <select name="breed" required>
            <option value="" disabled selected>
              Choose a breed
            </option>
            {breeds.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label>
          Number of Images:
          <input
            type="number"
            name="numImages"
            min="1"
            max="100"
            defaultValue="5"
            required
          />
        </label>
        <button type="submit">Build Your Gallery</button>
      </form>
    </div>
  );
};

export default BreedSelector;
