import React from 'react'
import './Contacts.css'
export default function Contacts() {
    return (
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact__container section-grid">
                    <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input"/>
                        <input type="mail" placeholder="Email" className="contact__input"/>
                        <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
                        <input type="button" value="Envoyer" className="contact__button button" />
                    </form>
                </div>
            </section>
    )
}
