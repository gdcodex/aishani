import React from "react";


const Con=({movie, imbd})=>{


    return(

        <>
        <div className="movies">
            <img src={movie} alt="movies"/>
            <div className="bottom-movie">
            <h4 className="movie-head">Watch</h4>
            <h4 className="movie-watch">IMBD:{imbd}</h4>
            </div>
        </div>    
        </>

    )
}

export default Con;