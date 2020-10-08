import React ,{useState, useEffect} from 'react';
import axios from 'axios';

const Pokey = () =>{

    const [poke, setpoke] = useState({
        num:undefined,
        name:"",
        moves:undefined
    });

    useEffect(()=>{
        const getPoke =async()=>{
            const res = await axios(`https://pokeapi.co/api/v2/pokemon/${poke.num}`)
            const Name= res.data.name;
            const Moves= res.data.moves.length;
            setpoke((prev)=>{
                return{
                    ...prev,
                    name:Name,
                    moves:Moves
                };
            });
        };
        getPoke();
    },[poke]);
    
    return(
        <>
            <select value={poke.num} onChange={(event)=>{
                setpoke({
                    ...poke,num:event.target.value
                })
            }}>
                <option value="1"> 1 </option>
                <option value="25"> 25 </option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="5"> 5 </option>
            </select>
            <h2>You selected {poke.num}, there you go <span style={{"color":"#FECA1B"}}>{poke.name}</span> <br/> You got <span style={{"color":"#FECA1B"}}>{poke.moves}</span> moves 🔥</h2>
        </>
    )
};
export default Pokey;