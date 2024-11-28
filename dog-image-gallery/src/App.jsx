import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from `react-router-dom`;
import Header from `./components/Header`;
import Footer from `./components/Footer`;
import BreedSelector from `./components/BreedSelector`;
import ImageGallery from `./components/ImageGallery`;
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Dog Images</h1>
    
    </div>
  )
}

export default App
