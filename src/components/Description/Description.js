import React from 'react';
import './Description.css';

const Description = ({track}) => {
    console.log(track)
    return(
    <div className="main">
        <span className="firstParagraph">{track.topDesc}</span>
        <span className="secondParagraph">{track.mainDesc}</span>
    </div>
);
}

export default Description;