import React,{useContext} from 'react'
import context from '../store/context';
import Controls from './controls';
import './layout.css';

function Layout() {
    const global = useContext(context).open;
    return (
        <>
        <Controls/>
      <section className={`layout-container ${global?'global':''}`}>
          <div className="layout" contentEditable="true">

          </div>
      </section>
      </>
    )
}

export default Layout
