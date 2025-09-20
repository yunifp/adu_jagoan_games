import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import clicksound from './music/click.mp3';

const ButtonFull = ({ isFullscreen, onClick }) => {
  const handleClick = () => {
    const audio = new Audio(clicksound);
    audio.play();
    onClick();
  };

  return (
    <button className="button-game-style" onClick={handleClick}>
      <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
    </button>
  );
};

export default ButtonFull;