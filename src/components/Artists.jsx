const Artists = () => {
  const artists = [
    {
      name: "Abaac Winykang (Ochan Omot)",
      genre: "Cultural Music",
      about: "Abaac Winykang, also known as Ochan Omot, is a prominent cultural singer from Gambella. He is known for performing 'Agwaaga,' a traditional Anywaa dance, and for celebrating the culture and traditions of the Anyuak people.",
      image: "/artists/abaac.jpg",
      videos: [
        '"Oteeno Otëë" (Official Video, 2024)',
        '"Teek Adwuö (Agwaaga)" (2024)',
        '"Kwääc Gøøk (Agwaga)" (2023)',
      ],
    },
    {
      name: "Lorson",
      genre: "Contemporary",
      about: "Lorson is a Gambella-born singer who released 'Wabang' in 2004 after the tragic mass ethnic killings of 2003. His music bridges traditional emotion and modern sound.",
      image: "/artists/lorson.jpg",
      albums: ["Wabang", "Ayang Mioo (Mama Africa)", "Crossing Borders"],
    },
    {
      name: "Jla The Smiero",
      genre: "World Music",
      about: "Jla The Smiero, born Ojal Ojulu, is a dynamic Ethiopian musician blending Afrobeat, trap, and R&B. Since 2020, he's gained fame for his energetic performances and fusion of Ethiopian and East African sounds.",
      image: "/artists/jla.png",
      videos: [
        '"JLA QUEEN SHEEBA" (Official Video, 2025)',
        '"Flamingo" (Visualizer, 2024)',
        '"Yi Bo Wiea" ft. Mtee (2024)',
      ],
    },
    {
      name: "Tararangga",
      genre: "Traditional",
      about: "Tararangga is an artist known for exploring okaama drumming, keeping the rhythmic heart of Anywaa tradition alive through ceremonial and spiritual performances.",
      image: "/artists/tararanga.jpg",
      albums: ["Ancient Chants", "Ceremonial Songs", "River Wisdom"],
    },
  ];

  return (
    <section id="artists" className="section-light">
      <div className="container">
        <h2 className="text-center">Anywaa Artists & Creators</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Meet the talented musicians and cultural ambassadors who are keeping
          Anywaa traditions alive while creating new artistic expressions for
          the modern world.
        </p>

        <div className="artists-grid">
          {artists.map((artist, index) => (
            <div key={index} className="artist-card">
              <div 
                className="artist-image" 
                style={{ backgroundImage: `url(${artist.image})` }}
              ></div>
              <div className="artist-info">
                <h3>{artist.name}</h3>
                <p className="genre">{artist.genre}</p>
                <p className="description">{artist.about}</p>

                {artist.albums && (
                  <div className="albums">
                    <strong>Notable Albums:</strong>
                    <ul>
                      {artist.albums.map((album, idx) => (
                        <li key={idx}>{album}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {artist.videos && (
                  <div className="videos">
                    <strong>Notable Videos:</strong>
                    <ul>
                      {artist.videos.map((video, idx) => (
                        <li key={idx}>{video}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;