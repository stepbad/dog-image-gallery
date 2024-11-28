import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </nav>
  </header>
);

export default Header;
