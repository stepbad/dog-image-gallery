import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <p>&copy; 2024 Dog Image Gallery. All rights reserved.</p>
    <div className="social-links">
      <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  </footer>
);

export default Footer;
