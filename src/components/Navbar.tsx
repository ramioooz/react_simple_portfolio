import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="desktop-navbar">
        <div className="navbar-logo">Rami Mohamed</div>
        <ul className="navbar-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="mobile-navbar">
        <div className="navbar-logo">Rami Mohamed</div>
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={handleMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>

          <div className={`mobile-menu-animator ${menuOpen ? "open" : ""}`}>
            <div className="mobile-menu">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
