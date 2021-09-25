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
                        <input></input>
                        <label>Sujet :</label>
                        <input></input>
                        <label>Votre message :</label>
                        <textarea rows="20"></textarea>

                        <button id='formBtn' type='submit' onclick={() => message}>Envoyer</button>

                    </div>   
                </form>
        </div>
    )
}
