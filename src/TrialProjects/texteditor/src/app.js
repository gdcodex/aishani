import React from 'react'
import Layout from './editor/layout'
import context from './store/context'
import Header from './header/header'

function App() {
  const[open,setopen]=React.useState(false);
    return (
        <context.Provider value={{open,setopen}}>
        <div className="app-container">
      <Header/>
      <Layout/>
        </div>
      </context.Provider>
    )
}

export default App
