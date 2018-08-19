import React from 'react';
import './Track.css';

const Track = () => {
    return(
    <div className="track">
        <span className="songTitle">Rainy Night in Slomo</span>
        <span className="artist">We Cut Corners</span>
        <div>
            <iframe src="https://open.spotify.com/embed/track/2wq2KG5bc2tjXecYpfcbzT" width="300" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media" title="play" aria-hidden="true"></iframe>
        </div>
    </div>);
}

export default Track;