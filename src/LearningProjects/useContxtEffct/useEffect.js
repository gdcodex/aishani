import React, {useState, useEffect} from 'react';

const Effect = () =>{

    const [int, setint] = useState(1);
    useEffect(()=>{
        document.title=`React App ${int}`
    },[int]);
    return(
        <>
            <button style={{ "display":"block","margin": "auto","background":"hotpink"}}
            onClick={()=>setint(int*11)}>
                Multiply me {int}
            </button>
        </>
    )
};
export default Effect;