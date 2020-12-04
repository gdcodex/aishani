import React from 'react'
import './sideheader.css'

function Sideheader() {
    return (
        <aside className="side-header">
            <section className="logo-box">
                <img src="feather.png" alt="" className="logo"/>
            </section>
            <section className="side-bottom">
                <img src="./templates.svg" alt="templates"/>
                <p>templates</p>
            </section>
        </aside>
    )
}

export default Sideheader
