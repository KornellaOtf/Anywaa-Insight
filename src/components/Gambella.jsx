import React from 'react';

const Gambella = () => {
  const sections = [
    {
      title: "The Land of Rivers and Harmony",
      description:
        "Gambella, located in the western part of Ethiopia, is known for its lush landscapes, the Baro River, and the diverse communities that inhabit the region. It's a cultural bridge connecting the Anywaa, Nuer, Majang, and other ethnic groups who have lived here for generations.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Baro_River_in_Gambela.jpg/1280px-Baro_River_in_Gambela.jpg",
    },
    {
      title: "Geography and Nature",
      description:
        "The region is defined by vast grasslands, tropical forests, and flowing rivers. The Baro River is central to life in Gambella—providing water, food, and transportation, and inspiring many of the songs and traditions of the Anywaa people.",
      image:
        "https://i0.wp.com/www.anyuakmedia.com/images/Gambella_Town_from_Air.jpg",
    },
    {
      title: "People and Culture",
      description:
        "Gambella is home to the Anywaa, Nuer, and Majang peoples. The Anywaa, among the oldest inhabitants, maintain deep-rooted traditions centered around community, oral storytelling, music, and respect for nature.",
      image:
        "https://i0.wp.com/www.anyuakmedia.com/Anyuak%20Mini%20Museum/Anyuak%20Cultural%20Attire%20photo/Anyuak%20Girls%20Cultural%20Dress.jpg",
    },
    {
      title: "Economy and Livelihood",
      description:
        "Fishing, agriculture, and trade are the backbone of life in Gambella. The fertile riverbanks support crops such as maize, sorghum, and rice. Local crafts and cultural festivals also contribute to the regional identity and economy.",
      image:
        "https://www.ethiopiatour.com/wp-content/uploads/2021/10/Gambella-Farmers.jpg",
    },
  ];

  return (
    <section className="section-light" id="gambella">
      <div className="container">
        <h2 className="text-center">Gambella Region</h2>
        <p className="text-center max-w-2xl mx-auto">
          Discover the beauty, history, and resilience of Gambella—a region where rivers flow through stories, and every melody echoes the harmony of its people.
        </p>

        <div className="gambella-grid">
          {sections.map((item, index) => (
            <div key={index} className="gambella-card">
              <div
                className="gambella-img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="gambella-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gambella;