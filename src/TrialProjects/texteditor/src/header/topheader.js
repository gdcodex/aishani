import React from 'react'
import './topheader.css';
function Topheader() {
    return (
       <header className="header-container">
            <section className="header-left">
                    <img src="back.png" alt="back" className="back-arrow"/>
                    <p className="heading">
                        Editing Project heading
                    </p>
            </section>
            <section className="header-right">
                <img src="profile.png" alt="profile" className="profile-avatar"/>
                <p className="upgrade">
                    UPGRADE
                </p>
            </section>
        </header>
    )
}

export default Topheader
