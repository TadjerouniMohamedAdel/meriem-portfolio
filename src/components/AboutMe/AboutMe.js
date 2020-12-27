import React from 'react'
import './AboutMe.css'
export default function AboutMe() {
    return (
        <section className="about section " id="about">
                <h2 className="section-title">À propos</h2>

                <div className="about__container section-grid">
                    <div className="about__img">
                        <img src="/images/meriem3.jpg" alt="" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'am Meriem</h2>
                        <p className="about__text">
                        Meriem est une personne très motivée et ambitieuse, elle souhaite évoluer au sein d'une équipe dynamique et professionnelle afin de développer son expérience dans divers domaines essentiellement les ressources humaines et la relation client.
elle s'appuie sur sa qualité d'autodidacte pour apprendre et acquérir des compétences qui vont la pousser à aller de l'avant    
                        </p> 
                        <div className="att-center">
                            <h4>Centre d'interet:</h4>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <a target="_blank" href="https://fr.coursera.org/">
                                    <img 
                                        src="/images/coursera.png"
                                        width={200}
                                    />
                                </a>
                                <a target="_blank" href="https://openclassrooms.com/fr/">
                                    <img 
                                        src="/images/oc.png"
                                        width={200}
                                    />
                                </a>        
                            
                            </div>  
                            
                        </div>
                    </div>                                   
                </div>
            </section>
    )
}
