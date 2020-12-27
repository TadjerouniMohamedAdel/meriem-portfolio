import React,{useState} from 'react'
import './Header.css'



export default function Header() {
    const [openDrawer,setOpenDrawer] = useState(false)
    return (
        <header className="header">
            <nav className="nav">
                <div>
                    <a href="#" className="nav-logo">
                        <img src="/images/bird1.png" alt="" width={50} />
                        Meriem BOUGHERARA 
                    </a>
                </div>

                <div className={`nav__menu ${openDrawer===true && 'show'}`}>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link active">Acceuil</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">À propos</a></li>
                        <li className="nav-item"><a href="#skills" className="nav-link">Compétences</a></li>
                        <li className="nav-item"><a href="#work" className="nav-link">Expériences</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav-toggle" id="nav-toggle"  onClick={()=>setOpenDrawer(!openDrawer)}>
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
    </header>
    )
}
