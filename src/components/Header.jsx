import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <h1>Anywaa<span>Insight</span></h1>
        </div>

        <nav className={`nav ${mobileMenu ? 'active' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('gambella')}>Gambella</button></li>
            <li><button onClick={() => scrollToSection('music')}>Music</button></li>
            <li><button onClick={() => scrollToSection('artists')}>Artists</button></li>
            <li><button onClick={() => scrollToSection('culture')}>Culture</button></li>
            <li><button onClick={() => scrollToSection('traditions')}>Traditions</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}