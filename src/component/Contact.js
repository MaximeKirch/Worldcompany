import React from 'react'
import ReactDom from 'react-dom';
import '../App.css'
import Logo from './Logo';

const Contact = ({isShowing, hide}) => 
isShowing 
? ReactDom.createPortal( 
        <>
        <Logo />
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

                        <button id='formBtn' type='submit' onclick={() => alert('Merci pour votre message !')}>Envoyer</button>

                    </div>   
                </form>
        </div>
        </>,
        document.body
    )
    : null;

    export default Contact;


