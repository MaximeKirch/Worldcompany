import React from "react";
import '../App.css';


//Remplacer Test par le nom de votre fonction

function Bandeau() {

    
    return(
        <>

        <div>
            <div className="bandeauHeader">
            <h1 className="bandeauH1">Titre</h1>
            <svg classNamme="bandeauSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" preserveAspectRatio="none">
                <circle  fill="#D7B899" cx="0" cy="100" r="100" />
                <circle fill="#D7B899" cx="200" cy="100" r="100" />
            </svg>
            </div>          
        </div>

        </>
    )
}

export default Bandeau;