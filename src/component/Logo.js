import React from 'react'
import '../App.css'
import useModal from './useModal'
import Contact from './Contact'

export default function Logo() {

    const {isShowing, toggle} = useModal();
    return (
        <>
        
        <div className="logoContainer">

        <div className="modal-toggle">
            <button onClick={toggle}>Contact</button>

            <Contact isShowing={isShowing} hide={toggle} />
        </div>
            <h1>World</h1>
            <img id="logo" src="https://freepikpsd.com/media/2020/03/Free-World-PNG-File.png" alt="logo"/>
            <h1>Company</h1>
            
        </div>

       

        </>
    )
}
