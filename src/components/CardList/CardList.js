import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

const CardList = ({tracks}) => {
    const cardArray = tracks.map((track) => {
        return <Card key={track.order} track={track} />;
    });

    return (
        <div  className="cardList">
            {cardArray}
        </div>
    );
}

export default CardList;