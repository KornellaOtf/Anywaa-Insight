const Traditions = () => {
  const traditions = [
    {
      title: "Marriage Ceremonies",
      description: "Elaborate multi-day celebrations involving both families, with traditional dances, songs, and symbolic exchanges.",
      image: "https://i.ytimg.com/vi/4UznMuTd-rc/sddefault.jpg",
      details: ["Bride price negotiations", "Traditional dances", "Family blessings"]
    },
    {
      title: "Harvest Festivals",
      description: "Community celebrations marking successful harvests with feasting, music, and thanksgiving ceremonies.",
      image: "https://www.farmafrica.org/wp-content/uploads/2025/10/Camera-View-Anywaa-Cultural-dressing-and-music-8.png",
      details: ["First fruits ceremony", "Community feasts", "Thanksgiving dances"]
    },
    {
      title: "Initiation Rites",
      description: "Traditional ceremonies marking the transition from childhood to adulthood for both boys and girls.",
      image: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_szX9k5lj3EqP-Amk_yVQWKaajQmz7xCE-cZ4tleHqqf_H-kji9QL3CulwTGUCnSZtosX58g7VLYlRIEMeVz1dn-ASlTpmBfX2D-mi1sXGtt6QsqrcEn9J16a1tJlTgubh2ku78eXMTWb997yzkQs-H7GZg2rFTOadTSn4tlbx_=s0-d",
      details: ["Age-set ceremonies", "Cultural teachings", "Community recognition"]
    },
    {
      title: "Fishing Traditions",
      description: "Rituals and techniques associated with fishing along the Baro River, including seasonal fishing ceremonies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXsG2aW7wHW9BWcQudwC2osHZjqdf9wjXBg&s",
      details: ["Traditional nets", "River blessings", "Seasonal rituals"]
    }
  ];

  return (
    <section className="section-dark" id="traditions">
      <div className="container">
        <h2 className="text-center">Traditional Practices & Ceremonies</h2>
        <p className="text-center max-w-2xl mx-auto">
          Anywaa traditions are deeply rooted in our connection to the land, river, and community. These practices have been preserved for generations and continue to shape our cultural identity.
        </p>
        
        <div className="traditions-grid">
          {traditions.map((tradition, index) => (
            <div key={index} className="tradition-card">
              <div className="image-container">
                <div className="tradition-img" style={{ backgroundImage: `url(${tradition.image})` }}></div>
              </div>
              <div className="tradition-content">
                <h3>{tradition.title}</h3>
                <p>{tradition.description}</p>
                <div className="tradition-details">
                  {tradition.details.map((detail, idx) => (
                    <span key={idx} className="detail-tag">{detail}</span>
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

export default Traditions;