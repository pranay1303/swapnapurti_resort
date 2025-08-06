<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>Swapnapurti</Link>
      </div>

      <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/rooms" onClick={closeMenu}>Rooms</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/packages" onClick={closeMenu}>Packages</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className={isOpen ? 'close' : ''}></span>
        <span className={isOpen ? 'close' : ''}></span>
        <span className={isOpen ? 'close' : ''}></span>
      </div>
    </nav>
  );
};

=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>Swapnapurti</Link>
      </div>

      <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/rooms" onClick={closeMenu}>Rooms</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/packages" onClick={closeMenu}>Packages</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className={isOpen ? 'close' : ''}></span>
        <span className={isOpen ? 'close' : ''}></span>
        <span className={isOpen ? 'close' : ''}></span>
      </div>
    </nav>
  );
};

>>>>>>> 7ada6c64a796a406fb05c3067c46d134a4b6f5b0
export default Navbar;