import { useEffect, useRef, useState } from "react";
import { linkType } from "../types/types";
import { navLinks } from "../constants";

const Navbar = () => {
  const menuRef = useRef(null);
  // const menuOpen = useRef(() => false);
  const [menuOpen, setMenuOpen] = useState(false);

  var outside_clickCounter = 0;

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
    // console.log('menuOpen.current: ', menuOpen.current);
    // menuOpen.current = !menuOpen.current;
    // console.log('menuOpen.current: ', menuOpen.current);
  };

  const handleDocClicks = (e: Event) => {
    // console.log("click detected on: ", e.target);

    // if(menuRef.current && e.target !== menuRef.current) {
    //   console.log('click outside the menu is detected.');
    //   // setMenuOpen(false);
    //   menuOpen.current = false;
    // }

    if (menuOpen && menuRef.current && e.target !== menuRef.current) {
      // console.log('click outside the menu is detected.');
      outside_clickCounter += 1;
      // console.log('outside_clickCounter: ', outside_clickCounter);
      if (outside_clickCounter == 1) {
        return;
      }
      // console.log('closing the menu..');
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocClicks);

    // useEffect cleaner
    return () => document.removeEventListener("click", handleDocClicks);
  }, [menuOpen]);

  return (
    <>
      <nav className="desktop-navbar">
        <div className="navbar-logo">Rami Mohamed</div>
        <ul className="navbar-links">
          {navLinks.map((link, i) => (
            <li>
              <a href={link.url} key={i}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="mobile-navbar">
        <div className="navbar-logo">Rami Mohamed</div>
        <div className="menu-container">
          <div
            className={`menu-icon ${menuOpen ? "open" : ""}`}
            onClick={handleMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`mobile-menu-animator ${menuOpen ? "open" : ""}`}>
            <div className="mobile-menu" ref={menuRef}>
              {navLinks.map((link, i) => (
                <a href={link.url} key={i}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
