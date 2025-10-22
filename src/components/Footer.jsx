import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Anywaa Insight</h3>
            <p>Preserving and celebrating the rich music, culture, and heritage of the Anywaa people of Gambella, Ethiopia.</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('gambella')}>Gambella Region</button></li>
              <li><button onClick={() => scrollToSection('music')}>Music</button></li>
              <li><button onClick={() => scrollToSection('artists')}>Artists</button></li>
              <li><button onClick={() => scrollToSection('culture')}>Culture</button></li>
              <li><button onClick={() => scrollToSection('traditions')}>Traditions</button></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links">
              <li><FaEnvelope /> info@anywaainsight.org</li>
              <li><FaPhone /> +251 123 456 789</li>
              <li><FaMapMarkerAlt /> Gambella, Ethiopia</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Cultural Centers</h3>
            <ul className="footer-links">
              <li>Gambella Cultural Museum</li>
              <li>Anywaa Community Center</li>
              <li>Baro River Heritage Site</li>
              <li>Traditional Music Archive</li>
            </ul>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2025 Anywaa Insight. All rights reserved. | Preserving Our Heritage, Celebrating Our Future</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;