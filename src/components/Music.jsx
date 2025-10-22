import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaMusic } from 'react-icons/fa';

const Music = () => {
  const [playingTrack, setPlayingTrack] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const tracks = {
    traditional: [
      { 
        id: 1, 
        title: "I MISS U", 
        artist: "Waduce x Black tyga and G platnumz", 
        duration: "4:50",
        audioUrl: "/music/imissu.mp3"
      },
      { 
        id: 2, 
        title: "ANA LONY KI NGAAP", 
        artist: "Waduce x Black tyga and G platnumz", 
        duration: "3:50",
        audioUrl: "/music/Ana-lony-ki-ngaap.mp3"
      },
      { 
        id: 3, 
        title: "QUEEN SHEEBA", 
        artist: "Jla the smiero", 
        duration: "4:14",
        audioUrl: "/music/gmeraki.mp3"
      },
      { 
        id: 4, 
        title: "Ruwa Ji jaak", 
        artist: "Young Magic", 
        duration: "4:56",
        audioUrl: "/music/magic.mp3"
      }
    ],
    contemporary: [
      { 
        id: 5, 
        title: "Aleenga", 
        artist: "Ochan Roman & Awaath", 
        duration: "5:05",
        audioUrl: "/music/Aleenga.mp3"
      },
      { 
        id: 6, 
        title: "Tëëk Adwuö", 
        artist: "Ochan Omot", 
        duration: "3:50",
        audioUrl: "/music/teek.mp3"
      },
      { 
        id: 7, 
        title: "Mama Otalo", 
        artist: "Ok Black", 
        duration: "4:25",
        audioUrl: "/music/mama.mp3"
      },
      { 
        id: 8, 
        title: "Teek beeto", 
        artist: "Abena j", 
        duration: "3:40",
        audioUrl: "/music/beeto.mp3"
      }
    ]
  };

  const handlePlay = (track) => {
    if (playingTrack === track.id && audioRef.current) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
        setPlayingTrack(null);
        return;
      }
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(track.audioUrl);
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      setCurrentTime(audio.currentTime);
    });

    audio.addEventListener('ended', () => {
      setPlayingTrack(null);
      setCurrentTime(0);
    });

    audio.addEventListener('error', (e) => {
      console.error('Error playing audio:', e);
      setPlayingTrack(null);
      alert('Error playing audio file. Please check if the file exists.');
    });

    audio.play().catch(error => {
      console.error('Play failed:', error);
      setPlayingTrack(null);
    });

    setPlayingTrack(track.id);
  };

  const handleSeek = (e) => {
    if (audioRef.current && duration > 0) {
      const progressContainer = e.currentTarget;
      const clickX = e.clientX - progressContainer.getBoundingClientRect().left;
      const width = progressContainer.offsetWidth;
      const seekTime = (clickX / width) * duration;
      
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const TrackList = ({ tracks, title }) => (
    <div className="player">
      <h3>{title}</h3>
      {tracks.map(track => (
        <div key={track.id} className={`track ${playingTrack === track.id ? 'playing' : ''}`}>
          <div className="track-info">
            <div className="track-title">{track.title}</div>
            <div className="track-artist">{track.artist} • {track.duration}</div>
            
            {playingTrack === track.id && (
              <div className="progress-container">
                <div className="progress-background" onClick={handleSeek}>
                  <div 
                    className="progress-bar" 
                    style={{ 
                      width: `${(currentTime / duration) * 100}%` 
                    }}
                  ></div>
                </div>
                <div className="time-display">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
            )}
          </div>
          
          <button 
            className={`play-btn ${playingTrack === track.id ? 'playing' : ''}`}
            onClick={() => handlePlay(track)}
          >
            {playingTrack === track.id ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      ))}
    </div>
  );

  const instruments = [
    { name: "Thum", description: "Traditional drum used in ceremonies" },
    { name: "Oporo", description: "String instrument similar to lyre" },
    { name: "Bul", description: "Flute made from river reeds" },
    { name: "Nyatiti", description: "Eight-stringed lyre" }
  ];

  return (
    <section className="section-dark" id="music">
      <div className="container">
        <h2 className="text-center">Anywaa Music</h2>
        <p className="text-center max-w-2xl mx-auto">
          Experience the soulful sounds of Anywaa music, from traditional rhythms passed down through generations to contemporary fusion that bridges cultures.
        </p>
        
        <div className="music-player">
          <TrackList tracks={tracks.traditional} title="Traditional Music" />
          <TrackList tracks={tracks.contemporary} title="Contemporary Sounds" />
        </div>

        <div className="instruments-section">
          <h3 className="text-center">Traditional Instruments</h3>
          <div className="features">
            {instruments.map((instrument, index) => (
              <div key={index} className="feature-card">
                <FaMusic className="instrument-icon" />
                <h3>{instrument.name}</h3>
                <p>{instrument.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;