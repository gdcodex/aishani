import React,{useState,useEffect} from 'react';
import './form.css';

const Form = () => {

    const [details,setdetails] = useState({
        fullname:"",
        email:"",
        number:null,
    });

    const userInput = (event)=>{
        const {value,name}=event.target;
        setdetails((prev)=>{
            return (
                {
                ...prev,
                [name]:value
                }
            )
        })
    };
    /*store the input details*/
    const [stored,setstored]= useState({
        fullname:"",
        email:"",
        number:null,
    });
    const submitted = (e) => {
        e.preventDefault();
        setstored(()=>{
            return details;
        });
        setdetails({
            fullname:"",
            email:"",
            number:null,
        });
    };

    /*store on local storage*/
    useEffect(()=>{
        const reslocal =localStorage.getItem("mydetails");
        if(reslocal){
            setstored(JSON.parse(reslocal));
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem("mydetails", JSON.stringify(stored));
    });

    return (
        <>
            <div className="s-form">
                <form onSubmit={submitted} className="form">
                    <input type="text" placeholder="" name ="fullname" value={details.fullname} onChange={userInput} className="fullname"/>
                    <input type="email" placeholder="" name="email" value={details.email} onChange={userInput} className="email"/>
                    <input type="number" placeholder="" name="number" value={details.number} onChange={userInput} className="phonenum"/>
                    <button type="reset">Inveso</button>       
                    <button type="submit">Vamos</button>
                </form>
            </div>
        </>
    )
};
export default Form;