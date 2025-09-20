import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const ButtonMute = ({ onClick }) => {
    const [isMuted, setIsMuted] = useState(false);

    useEffect(() => {
        const audio = document.getElementById('background-audio');
        if (audio) {
            audio.muted = isMuted;
        }
    }, [isMuted]);

    useEffect(() => {
        const audio = document.getElementById('background-audio');
        if (audio) {
            audio.volume = 0.2; // Set volume to half
        }
    }, []);

    const handleClick = () => {
        setIsMuted(prev => !prev);
        onClick();
    };

    return (
        <button className="button-game-style" onClick={handleClick}>
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        </button>
    );
};

export default ButtonMute;