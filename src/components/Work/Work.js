import React from 'react'
import Timeline from '../Timeline/Timeline'
import './Work.css'
export default function Work() {
    return (
        <section className="work" id="work">
                <h2 className="section-title">Expériences</h2>
                    <Timeline />

                <div className="work__container section-grid">
                </div>
            </section>
    )
}
