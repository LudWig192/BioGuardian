//pagina feita por Vinicius
import React, { useState, useRef, useEffect } from 'react';
import '../Style/Secreto.css';
import LIL from '../Audios/Live_it_loud.mp3';
import Hero from '../Audios/Hero_Skillet.mp3';
import American from '../Audios/American_idiot.mp3';
import DDEG from '../Audios/Dias_de_lutas.mp3';
import SpiderDance from '../Audios/Spider_Dance.mp3';
import IDM from '../Audios/iogurte.mp3';

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [showControls, setShowControls] = useState(false); 
  const audioRef = useRef(null);

  const songs = [
    {
      name: "Live it loud",
      artist: "Vinicius Brito",
      composer: "Slick Danger",
      src: LIL,
    },
    {
      name: "Hero",
      artist: "Lucas Tinin",
      composer: "Skillet",
      src: Hero,
    },
    {
      name: "Dias De Luta, Dias De Glória",
      artist: "Prof. Willam",
      composer: "Charlie Brown Jr",
      src: DDEG,
    },
    {
      name: "American Idiot",
      artist: "Pedro Mestre",
      composer: "Green Day",
      src: American,
    },
    {
      name: "Spider Dance",
      artist: "Alison Marcolino",
      composer: "Toby Fox",
      src: SpiderDance,
    },
    
    //Musica feita por um amigo meu
    //Espero que goste quando for ouvir
    {
      name: "Iogurte de Morango",
      artist: "",
      composer: "Alyson Paschoal",
      src: IDM,
    },
  ];

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      if (isLooping) {
        audio.currentTime = 0;
        audio.play();
      } else {
        setShowControls(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [isLooping]);

  const playSong = (index) => {
    if (currentSongIndex === index) {
      audioRef.current.pause();
      setCurrentSongIndex(null);
      setCurrentTime(0);
      setShowControls(false);
    } else {
      audioRef.current.src = songs[index].src;
      audioRef.current.play();
      setCurrentSongIndex(index);
      setShowControls(true);
    }
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  return (
    <div className="main">
      <div className="currentplaying">
        <svg className="spotify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50px" height="50px"></svg>
        <p className="heading">Músicas sugeridas por algumas pessoas e produções originais</p>
      </div>
      {songs.map((song, index) => (
        <div className="loader" key={index} onClick={() => playSong(index)}>
          <div className="song">
            <div className='joao'>
              <p className="name">{song.name}</p>
            </div>
            <p className="artist">
              {song.name === "Iogurte de Morango" ? "Feito por: Alyson Paschoal" : `Sugerido por: ${song.artist}`}
            </p>
          </div>
          <div className="loading">
            {currentSongIndex === index ? (
              <>
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
              </>
            ) : (
              <div className='tocando'>
                <div className="play"></div>
              </div>
            )}
          </div>
        </div>
      ))}
      {currentSongIndex !== null && showControls && (
        <div className="time-controls">
          <p className="time-display">{formatTime(currentTime)} / {formatTime(duration)}</p>
          <input
            type="range"
            className="time-slider"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleTimeChange}
          />
          <p className="composer-label">
            Composto por: {songs[currentSongIndex].composer}
          </p>
          <button className="loop-button" onClick={toggleLoop}>
            {isLooping ? "Desativar Loop" : "Ativar Loop"}
          </button>
        </div>
      )}
      <audio ref={audioRef} />
    </div>
  );
};

export default MusicPlayer;
