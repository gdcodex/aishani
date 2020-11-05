import React from "react";

import "./carousel.css";

const Carousel = () => {
  const Irray = [
    "https://cdn.pixabay.com/photo/2020/05/24/06/54/dumbo-5212670_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/27/07/40/cheetah-5689870__480.jpg",
    "https://cdn.pixabay.com/photo/2020/10/29/05/02/buddhist-5695220__480.jpg",
    "https://cdn.pixabay.com/photo/2020/10/21/19/43/jack-o-lanterns-5674148__480.jpg",
    "https://cdn.pixabay.com/photo/2020/05/24/06/54/dumbo-5212670_1280.jpg"
  ];
  
  const one =()=>{
          document.getElementById("slider").className = "carousel-slider one"
  }
  const two =()=>{
          document.getElementById("slider").className = "carousel-slider two"
  }
  const three =()=>{
          document.getElementById("slider").className = "carousel-slider three"
  }
  const four =()=>{
          document.getElementById("slider").className = "carousel-slider four"
  }
 

  return (
    <>
      <section className="carousel-container">
        <div className="carousel-slider one" id="slider">
          {Irray.map((e, i) => (
            <img key={"c-" + i} src={e} className="carousel-image" id={"pic" + i}/>
            
          ))}
        </div>
        <div className="indicator">
          <span onClick={one}>A</span>
          <span onClick={two}>B</span>
          <span onClick={three}>C</span>
          <span onClick={four}>D</span>
        </div>
      </section>
    </>
  );
};
export default Carousel;
