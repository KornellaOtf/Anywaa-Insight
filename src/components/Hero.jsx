import { FaPlay, FaCompass, FaUsers } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Echoes of the River Voices of the People</h1>
        <p>Celebrating the rich music, culture, and heritage of the Anywaa people of Gambella, Ethiopia. Discover our traditions, artists, and the beauty of our homeland along the Baro River.</p>
        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => scrollToSection('music')}>
            <FaPlay />
            Explore Music
          </button>
          <button className="btn btn-secondary" onClick={() => scrollToSection('gambella')}>
            <FaCompass />
            Discover Gambella
          </button>
          <button className="btn btn-primary" onClick={() => scrollToSection('artists')}>
            <FaUsers />
            Meet Artists
          </button>
        </div>
      </div>
      <div className="hero-image"></div>
    </section>
  );
};

export default Hero;