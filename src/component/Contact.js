import React from 'react'
import '../App.css'

export default function Contact() {

    function message() {
        alert('Merci pour votre message !');
    }
    return (
        <div className="formContainer">
                <form>
                    <label id='contact'>Contactez-nous !</label>

                    <div className='formInfos'>
                        <label>Nom :</label>
                        <input placeholder='Richard Coeur de Lion' required></input>
                        <label>Sujet :</label>
                        <input placeholder='Sujet' required></input>
                        <label>Votre message :</label>
                        <textarea placeholder='Simplement une petite suggestion...' rows="20" required></textarea>

                        <button id='formBtn' type='submit' onclick={() => message}>Envoyer</button>

                    </div>   
                </form>
        </div>
    )
}
