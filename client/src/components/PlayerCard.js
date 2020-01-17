import React from 'react';

const PlayerCard = props => {
    return (
        <div className='playerCard'>
            <h2>{props.name}</h2>
            <p>Country: {props.country}</p>
            <p>Number of Searches: {props.searches}</p>
        </div>
    )
}

export default PlayerCard;