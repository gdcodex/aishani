import React from "react";
import Top from "./top"
import Con from "./content";
import "./movie.css";

const App = () => {

    const info = [
        { movie: "https://i.pinimg.com/originals/58/79/a3/5879a32cd16eeb36815b4b831f50ef7c.jpg",
         imbd:"8.9/10" },
        { movie:"https://i.pinimg.com/originals/00/b4/53/00b453ce50af85e45200ff1173cf3559.jpg", imbd:"8.5/10" },
        { movie:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRurn_kORVpzLNwa6dL9KVzC72apeVbVBzcYA&usqp=CAU", imbd:"8.3/10" },
        {movie:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKfKcb4ZvNn48fBqvcsYsUwb3m92otrhMW7Q&usqp=CAU" ,imbd:"9/10"},
        { movie:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKIN2P5WXchdcq8fvsh93b7hECYu4KhtlphQ&usqp=CAU", imbd:"8.5/10" },
        {movie:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrQ5M22jHIDloDs8-cLW5lFoiLjgSTkSaqQg&usqp=CAU", imbd:"8.7/10"}
    ];

    return (

        <>
            <Top />
            <div id="movie-box">

                {info.map((rend) => (
                    <Con movie={rend.movie} imbd={rend.imbd} />
                ))}
            </div>
        </>

    )
}

export default App;