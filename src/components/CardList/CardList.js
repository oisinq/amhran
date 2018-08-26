import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

const CardList = ({tracks}) => {
    let cardArray = tracks.map((track) => {
        return <Card key={track.order} track={track} />;
    });

    cardArray = cardArray.reverse()

    return (
        <div  className="cardList">
            {cardArray}
        </div>
    );
}

export default CardList;