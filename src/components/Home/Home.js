import React from 'react'
import './Home.css'
export default function Home() {
    return (
        <section className="home" id="home">
            <div className="home-data">
                <h1 className="home-title">Hi,<br />I'am <span className="home-title-color">Meriem</span><br /> BOUGHERARA</h1>
                <div style={{"marginTop":-20,marginBottom:20}} className="home-social">
                    <a href="https://www.linkedin.com/in/meriem-bougherara-983880168/" target="_blank" className="home-social-icon"><i className='bx bxl-linkedin'></i></a>
                    <a target="_blank" href="" className="home-social-icon"><i className='bx bxl-skype' ></i></a>
                    <a target="_blank" href="https://web.facebook.com/profile.php?id=100011251069339" className="home-social-icon"><i className='bx bxl-facebook' ></i></a>
                    <a target="_blank" href="https://twitter.com/bm_mimisa" className="home-social-icon"><i className='bx bxl-twitter' ></i></a>
                    <a target="_blank" href="https://www.pinterest.com/meriembougherar/_saved/" className="home-social-icon"><i className='bx bxl-pinterest' ></i></a>

                </div>
                <a href="/CV.docx" target="_blank" className="button">Mon cv</a>
            </div>
            <div className="home-img">    
                <img src="/images/meriem-re.png" alt="" />
            </div>
    </section>
    )
}
