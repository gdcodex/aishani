import React, {useState} from 'react';






const State = ({band,song}) => {

    const [isRed, setRed] = useState(false);
    const [count,setCount] = useState(0);
    const  increment=()=>{
        setCount(count + 11);
        setRed(!isRed);
    };


    return (
        <>
        <div className="band-trend">
            {/* <h5 className={isRed ? 'red':"blue"} >{count}</h5>
            <h3 className="incre" onClick={increment}>Raise</h3> */}

            <h4 className="band">{band}</h4>
            <h6 className="best-song">{song} &#127911;</h6>
        </div>
        </>

    )
}
export default State;