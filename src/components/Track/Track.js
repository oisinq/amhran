import React from 'react';
import Nav from '../Nav/Nav';
import Arrow from '../../images/scroll.svg';

import './Track.css';

const Track = ({track, main}) => {
    let embed;

    if (track.mediaType === "spotify") {
        embed = <iframe src={track.mediaLink} title="Track of the day" width="300px" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    } else if (track.mediaType === "bandcamp") {
        embed = <iframe src={track.mediaLink} title="Track of the day" seamless className="bandcamp">{track.songName} by {track.artistName}</iframe>
    } else if (track.mediaType === "soundcloud") {
        embed = <iframe className="soundcloud" title="Track of the day" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={track.mediaLink}></iframe>
    }

    let imager = require(`../../images/${track.image}`);

    let backgroundStyle = {
        "backgroundImage": `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,1)), url("${imager}")`,
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    }
    let nav;

    if (main === "true") {
        nav = <Nav origin="main"/>
    } else {
        nav = <Nav origin="track"/>
    }
    
    return(
        <div style={backgroundStyle} className="fullTrack">
            {nav}
            <div className="track">
                <span className="entryNumber flexElement">#{track.order}</span>
                <span className="songTitle flexElement">{track.songName}</span>
                <span className="artist flexElement">{track.artistName}</span>
                <div className="flexElement">
                {embed}
                </div>
                <div className="flexElement arrow">
                    <img src={Arrow} alt="" width="63"></img>
                </div>
            </div>
        </div>);
    }

export default Track;