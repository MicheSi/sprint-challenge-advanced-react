import React from 'react';

const PlayerCard = props => {
    return (
        <div className='playerCard'>
            <h2 data-testid='playerName'>{props.name}</h2>
            <p data-testid='countryName'>Country: {props.country}</p>
            <p data-testid='searchNumber'>Number of Searches: {props.searches}</p>
        </div>
    )
}

export default PlayerCard;