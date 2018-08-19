import React from 'react';
import Arrow from '../../images/scroll.svg'
import './Track.css';

const Track = () => {
    return(
    <div className="track">
        <span className="entryNumber flexElement">#001</span>
        <span className="songTitle flexElement">Rainy Night in Slomo</span>
        <span className="artist flexElement">We Cut Corners</span>
        <div className="flexElement">
        <iframe src="https://open.spotify.com/embed/track/2wq2KG5bc2tjXecYpfcbzT" width="300px" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="flexElement arrow">
            <img src={Arrow} width="63"></img>
        </div>
    </div>);
}

export default Track;