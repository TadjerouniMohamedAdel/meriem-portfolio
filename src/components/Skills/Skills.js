import React from 'react'
import './Skills.css'

export default function Skills() {
    return (
        <section className="skills section" id="skills">
                <h2 className="section-title">Compétences</h2>

                <div className="skills__container section-grid">          
                    <div>
                        <div>
                                <h3 className="skills__subtitle">Compétences academiques</h3>
                                    <ul>
                                        <li className="skills__text">Maitrise de la législation algérienne</li>
                                        <li className="skills__text">Solides Notions en droit international (Conventions, Traités, relations internationales).</li>
                                        <li className="skills__text">Gestion et suivi des besoins des clients et leur apporter une solution adaptée.</li>
                                        <li className="skills__text">Multi langues Francais-Anglais-Arabe </li>
                                        <li className="skills__text"></li>
                                    </ul>
                        </div>
                        <div>
                            <h3 className="skills__subtitle">Compétences techniques</h3>
                            <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                                <img className="tech" src="/images/word.png" width={70}/>
                                <img className="tech" src="/images/excel.png" width={70} />
                                <img className="tech"src="/images/ppt.png" width={70} />
                                <img className="tech" src="/images/paie2.png" width={70} />
                            </div>
                       
                        </div>
                    </div>
                    
                    
                    <div>              
                        <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80" alt="" className="skills__img" />
                    </div>
                </div>
            </section>
    )
}
