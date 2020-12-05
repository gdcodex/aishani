import React from 'react'
import Controls from './controls';
import './layout.css';

function Layout() {
    return (
        <>
        <Controls/>
      <section className="layout-container">
          <div className="layout" contentEditable="true">

          </div>
      </section>
      </>
    )
}

export default Layout
