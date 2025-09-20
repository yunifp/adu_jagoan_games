import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import clicksound from '../components/music/click.mp3';

const ButtonInfo = ({ onClick }) => {
    const handleClick = (event) => {
        const audio = new Audio(clicksound);
        audio.play();
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button className="button-game-style" onClick={handleClick}>
            <FontAwesomeIcon icon={faQuestion} />
        </button>
    );
};

export default ButtonInfo;