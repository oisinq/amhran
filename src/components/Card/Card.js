import React from 'react';
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({track}) => {

    let imager = require(`../../images/${track.image}`);
    let backgroundStyle = {
        "background": `linear-gradient(
            rgba(0, 0, 0, 0.2), 
            rgba(0, 0, 0, 0.2)
          ), url("${imager}")`,
        "background-size": "cover",
        "background-position": "center"
    }

    return (
        <Link to={`/${track.order}`}  style={{ textDecoration: 'none' }}>
            <div style={backgroundStyle} className="card">
                <span className="cardNumber">#{track.order}</span>
                <div className="cardTrackInfo">
                    <span className="cardSongName">{track.songName}</span>
                    <span className="cardArtistName">{track.artistName}</span>
                </div>
            </div>
        </Link>
    );
}

export default Card;