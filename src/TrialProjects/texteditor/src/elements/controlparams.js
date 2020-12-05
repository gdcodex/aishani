import React,{useState} from 'react'
import Controlvalues from './controlvalues'

function Controlparams(props) {
   const [text, settext] = useState("Sansserifevhcfbcfcuvur");
    return (
        <section className="control-box">
        <a href="#" className="control-params" style={{width:props.img?"auto":"100px"}} onClick={props.onclick}>
       {
       !props.img && <span>{text}</span>
       }
       {
           props.img &&
           <img src={props.img} alt="img"/>
       }
        {!props.none && <img src="./dropdown.svg" alt="controls"/>}
    </a>
  
    {/* <Controlvalues values={["Bolddffgvrbgrtb","Italics","Underlined","fuckl offjchdefbiufguirfgvu","vedfucu","juuegf","yyvc","yfgceyicg"]} settext={settext}/> */}
    </section>
    )
}

export default Controlparams
