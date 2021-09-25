import React, { useState } from 'react';
import { civNewData } from '../data/civNewData';
import Civilization from './Civilization';

const CivilizationList = () => {

    const [civilizations] = useState(civNewData);
    
    const [selectedOption, setSelectedOption] = useState("Aztecs");
    
    const handleOption = (event) => {
        let option = event.target.value;
        setSelectedOption(option);
    }
    
    return (
        <div className="infoContent">
            <select value={selectedOption} onChange={handleOption}>
                <option>Aztecs</option>
                <option>Britons</option>
                <option>Byzantines</option>
                <option>Celts</option>
                <option>Chinese</option>
                <option>Franks</option>
                <option>Goths</option>
                <option>Huns</option>
                <option>Japanese</option>
                <option>Koreans</option>
                <option>Mayans</option>
                <option>Mongols</option>
                <option>Persians</option>
                <option>Saracens</option>
                <option>Spanish</option>
                <option>Teutons</option>
                <option>Turks</option>
                <option>Vikings</option>
                <option>Berbers</option>
                <option>Burmese</option>
                <option>Ethiopians</option>
                <option>Incas</option>
                <option>Indians</option>
                <option>Italians</option>
                <option>Khmer</option>
                <option>Magyars</option>
                <option>Malians</option>
                <option>Portuguese</option>
                <option>Slavs</option>
                <option>Vietnamese</option>

            </select>
            <div>
            {
                    civilizations
                    
                   
                    .filter((item) => 
                        item.name.includes (selectedOption)) 
            
                    .map((item) => {
                        
                        
                        return (
                            <Civilization

                                key={item.id} 
                                item={item}
                            />       
                        )

                    })

                }
            </div>
            
        </div>
    );
};

export default CivilizationList;