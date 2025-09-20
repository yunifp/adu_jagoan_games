import React from 'react';
import { Link } from 'react-router-dom';
import clicksound from './music/click.mp3';

const ButtonPlay = ({ text, link, selectedCategory }) => {
  // Function to play sound
  const playSound = () => {
    const audio = new Audio(clicksound);
    audio.play();
  };

  return (
    <Link
      to={link}
      className="start-button"
      onClick={playSound}
    >
      {text}
    </Link>
  );
};

export default ButtonPlay;
