import React from 'react';
import "./Card.css"

const Card = ({track}) => {


    let imager = require(`../../images/${track.imageMin}`);
    let backgroundStyle = {
        "background": `url("${imager}")`,
        "background-size": "cover",
        "background-position": "center"
    }


    return (
        <div style={backgroundStyle} className="card" >
            <span className="cardNumber">{track.order}</span>
            <div className="cardTrackInfo">
                <span className="cardSongName">{track.songName}</span>
                <span className="cardArtistName">{track.artistName}</span>
            </div>
        </div>
    );
}

export default Card;