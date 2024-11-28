import {NavLink} from 'react-router-dom';
import {motion} from `framer-motion`;

const Header = () => (
  <motion.header
    initial = {{ y: -50, opacity: 0}}
    animate = {{ y: 0, opacity: 1}}
    transition = {{ duration: 0.5}}
    >
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </nav>
  </motion.header>
);

export default Header;
