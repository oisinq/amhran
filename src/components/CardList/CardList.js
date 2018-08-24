import React from 'react';
import Card from './Card';

const CardList = ({tracks}) => {
    const cardArray = tracks.map((track) => {
        return <Card key={track.order} id={track.order} trackName={track.trackName} artistName={track.artistName} />;
    });

    return (
        <div>
            {cardArray}
        </div>
    );
}

export default CardList;