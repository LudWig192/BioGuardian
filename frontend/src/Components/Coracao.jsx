import React, { useState, useEffect } from 'react';
import '../Style/Coracao.css'; 

const Coracao = () => {
  const [beat, setBeat] = useState(60); 
  const [increasing, setIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeat(prev => (increasing ? prev + 5 : prev - 5)); 
      if (beat >= 120) {
        setIncreasing(false); 
      } else if (beat <= 60) {
        setIncreasing(true); 
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [beat, increasing]);

  return (
    <div className="heartbeat-container">
      <div className="heartbeatloader">
        <svg className="svgdraw" width="100%" height="100%" viewBox="0 0 150 400" xmlns="http://www.w3.org/2000/svg">
          <path className="path" d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0" 
            fill="transparent" strokeWidth="4" stroke="black"></path>
        </svg>
        <div className="innercircle"></div>
        <div className="outercircle"></div>
      </div>
      <div className="beat-count">{beat} BPM</div> 
    </div>
  );
};

export default Coracao;