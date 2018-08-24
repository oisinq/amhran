import React from 'react';
import Arrow from '../../images/scroll.svg'

import './Track.css';

const Track = ({track}) => {
    let embed;

    if (track.mediaType === "spotify") {
        embed = <iframe src={track.mediaLink} title="Track of the day" width="300px" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    } else if (track.mediaType === "bandcamp") {
        embed = <iframe src={track.mediaLink} title="Track of the day" seamless className="bandcamp">{track.songName} by {track.artistName}</iframe>
    } else if (track.mediaType === "soundcloud") {
        console.log("I got nothin'!");
    }
    console.log(track.style);

    let imager = require(`../../images/${track.image}`);

    let backgroundStyle = {
        "background": `linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 30%, rgba(0,0,0,1) 100%), ${track.style.background}, url("${imager}")`,
        "background-size": "cover",
        "background-position": "center"
    }
    
    return(
        <div style={backgroundStyle} className="track">
            <span className="entryNumber flexElement">{track.order}</span>
            <span className="songTitle flexElement">{track.songName}</span>
            <span className="artist flexElement">{track.artistName}</span>
            <div className="flexElement">
            {embed}
            </div>
            <div className="flexElement arrow">
                <img src={Arrow} alt="" width="63"></img>
            </div>
        </div>);
    }

export default Track;