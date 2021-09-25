import React, { useState, useEffect } from 'react';

const InfoCiv = () => {

    const [searchCiv, setSearchCiv] = useState ("Choisissez une civilisation");

    let civName = searchCiv;
    
    const [dataCiv, setDataCiv] = useState(null);
    useEffect(()=> {
        fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" + civName)
        .then  ((resp)=> resp.json())
        .then ((data) => setDataCiv(data.product))
    }, [])

    return (
        <div>
            <input 
            type="text"
            onChange={(event)=>setSearchCiv(event.target.value)}
            value={searchCiv}
            />

        </div>
    );
};

export default InfoCiv;