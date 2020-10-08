import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sodo from './sodo.json';

const Duo = () => {


    
    const [lofi, setlofi] = useState({
        l:"",
        m:"",
        n:"",
    });

    useEffect(() => {
        // const getLofi = async () => {
        //     const res = await axios(`https://pokeapi.co/api/v2/pokemon/1`);
        //     console.log(res.data);
        // };
        // getLofi();
        
        const data = sodo.song[`${lofi.m}`];
        console.log(data);
        setlofi((prev)=>{
            return {
                ...prev, n: data
            }
        });
    }, [lofi.m]);

    useEffect(()=>{
        const reslocal =localStorage.getItem("mysong");
        if(reslocal){
            setlofi(JSON.parse(reslocal));
        }
    },[]);
    useEffect(()=>{
        localStorage.setItem("mysong", JSON.stringify(lofi));
    });


console.log(lofi);




    return (
        <>
            <div className="second-half">
                <h5 id="track">Get those buds in ! {lofi.n}</h5>
                <div className="form">
                    <input type="text" placeholder="Find your favourite lofi track " value={lofi.l} className="search-music" onChange={(e)=>{
                        setlofi({...lofi,l:e.target.value})}} />
                    <span><img src="https://www.flaticon.com/svg/static/icons/svg/3037/3037910.svg" alt="" onClick={()=>{
                        document.getElementById("track").style.display="block";
                        setlofi((prev)=>{
                            return {
                                ...prev, m: lofi.l
                            }
                        });
                        setlofi((prev)=>{
                            return {
                                ...prev, l: ""
                            }
                        });
                        
                    }} onDoubleClick={()=>{
                        document.getElementById("track").style.display="none";
                        
                    }}/></span>
                </div>
            </div>
        </>
    )
};

export default Duo;