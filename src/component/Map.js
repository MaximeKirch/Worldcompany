
import React from "react";
import '../App.css';
import map from '../assets/map.jpeg'


//Remplacer Test par le nom de votre fonction

function Map() {

    
    return(
        <>
        <div id= 'mapTitle'>
        <h2>Des données à travers le monde</h2>
        </div>

    <div className="backgroundImage">
        <img id='hero' src={map} alt="map"/>
        
    </div>

        </>
    )
}

export default Map;