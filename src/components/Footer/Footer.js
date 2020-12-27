import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Meriem BOUGHERARA</p>
            <div className="footer__social">
                    <a href="https://www.linkedin.com/in/meriem-bougherara-983880168/" target="_blank" className="footer__icon"><i className='bx bxl-linkedin'></i></a>
                    <a target="_blank" href="" className="footer__icon"><i className='bx bxl-skype' ></i></a>
                    <a target="_blank" href="https://web.facebook.com/profile.php?id=100011251069339" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                    <a target="_blank" href="https://twitter.com/bm_mimisa" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
                    <a target="_blank" href="https://www.pinterest.com/meriembougherar/_saved/" className="footer__icon"><i className='bx bxl-pinterest' ></i></a>
            </div>
            <a target="_blank" href="https://nagatodev.netlify.app/" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <span>Ce site est creer par Nagatodev</span>
                <img src="https://nagatodev.netlify.app/src/amt2.png" width={100} />

            </a>
        </footer>
    )
}
