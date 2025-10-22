const Culture = () => {
  const culturalAspects = [
    {
      title: "Language: Dha-Anywaa",
      description: "The Anywaa language belongs to the Luo language family. It's a vital part of our identity with unique proverbs and oral traditions that preserve our history and wisdom.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      phrases: ["Hello - Ameri", "Thank you - Ina Pwoc", "How are you? - Idhi nade?", "Welcome - Ameri"]
    },
    {
      title: "Traditional Attire",
      description: "Colorful beadwork, intricate jewelry, and woven fabrics characterize Anywaa traditional clothing, each with symbolic meanings and cultural significance.",
      image: "https://imgs.search.brave.com/VvJMrULr6eqh-Sk95jfNKm72U3ohBRNBo2rjnujD7Nc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9tZC9wZXhl/bHMvZG1zM3JlcC9t/dWx0aS9vcHQvcGV4/ZWxzLXBob3RvLTkz/NTk4NS0xOTIwdy5q/cGVn",
      phrases: ["Bead colors = Social status", "Jewelry = Life stages", "Patterns = Family history", "Colors = Cultural identity"]
    },
    {
      title: "Social Structure",
      description: "Organized around clans and age sets, with strong community values and respect for elders guiding social interactions. Decision-making is collective and consensus-based.",
      image: "https://i0.wp.com/www.anyuakmedia.com/Anyuak%20Mini%20Museum/King%20Akwai%20Agada%20Ceremony%20photo/King%20Akwai%20Agada%20Akwai%20Cham_3.jpg",
      phrases: ["Clan identity is important", "Elders are respected", "Community decisions are collective", "Age sets organize society"]
    },
    {
      title: "Art & Craftsmanship",
      description: "Skilled pottery, basket weaving, and wood carving that combine functionality with artistic expression and cultural symbolism. Each craft tells a story of our heritage.",
      image: "https://i.ytimg.com/vi/KAjGl3B5B3s/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gUCgTMA8=&rs=AOn4CLCLyMNMjdYvlsDYShPxjwY-3geIEQ",
      phrases: ["Pottery for daily use", "Baskets for storage", "Carved items for ceremonies", "Beadwork for adornment"]
    }
  ];

  return (
    <section className="section-light" id="culture">
      <div className="container">
        <h2 className="text-center">Anywaa Culture & Identity</h2>
        <p className="text-center max-w-2xl mx-auto">
          The Anywaa people have a rich cultural heritage that encompasses language, social organization, artistic expression, and traditional knowledge passed down through generations.
        </p>
        
        <div className="culture-grid">
          {culturalAspects.map((aspect, index) => (
            <div key={index} className="culture-item">
              <div className="image-container">
                <div className="culture-img" style={{ backgroundImage: `url(${aspect.image})` }}></div>
              </div>
              <div className="culture-content">
                <h3>{aspect.title}</h3>
                <p>{aspect.description}</p>
                <div className="phrases">
                  {aspect.phrases.map((phrase, idx) => (
                    <div key={idx} className="phrase-item">• {phrase}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Culture;