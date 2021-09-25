import React from 'react'
import philippeAuguste from '../assets/philippeAuguste.jpg'
import guillaumeNormandie from '../assets/guillaumeNormandie.jpg'
import '../App.css'

function Testimonials() {

    return(
        <>
        <div id= 'testimonialTitle'>
        <h2>Ils se sont informés : </h2>
        </div>
                <div className='testimonialMain'>
                    
                    <div className='testimonialContainer'>
                        <p className='testimonialText'>Nous avons gagné à Bouvines contre l'empereur Otton IV !!!! Heureusement qu'il n'utilisait pas BattleChanger !</p>
                            <div className='profileTestimonial'>
                                <img id="avatar" src={philippeAuguste} alt=""/>
                                <span>Philippe Auguste</span>
                                <span>1214</span>
                            </div>
                    </div>

                    <div className='testimonialContainer'>
                        <p className='testimonialText'>Nous n'aurions jamais gagné Hastings sans BattleChanger ! L'Angleterre est à nous !</p>
                            <div className='profileTestimonial'>
                                <img id="avatar" src={guillaumeNormandie} alt=""/>
                                <span>Guillaume de Normandie</span>
                                <span>1066</span>
                            </div>
                    </div>
                    
                    
                    
            
                
                </div>
            
            
        
        </>

    )
}

export default Testimonials