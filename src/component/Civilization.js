import React from 'react';
import CivilizationList from './CivilizationList'

const Civilization = (props) => {

    const {item} = props;


    return (
        <div>

            <h2>{item.name}</h2>
            <img src={item.img_url} alt="blason"/>
            <p>Population: {item.population}</p>
            <p>Monnaie: {item.currency}</p>
            <p>Battle Score: {item.battlescore}</p>

            
        </div>
    );
};

export default Civilization;