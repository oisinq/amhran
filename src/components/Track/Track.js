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
    console.log(embed);

    return(
        <div className="track">
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