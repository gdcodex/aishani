import React from "react";

import "./carousel.css";

const Carousel = () => {
  const Irray = [
    "https://cdn.pixabay.com/photo/2020/05/24/06/54/dumbo-5212670_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/10/27/07/40/cheetah-5689870__480.jpg",
    "https://cdn.pixabay.com/photo/2020/10/29/05/02/buddhist-5695220__480.jpg",
    "https://cdn.pixabay.com/photo/2020/10/21/19/43/jack-o-lanterns-5674148__480.jpg",
  ];

  return (
    <>
    <a href="#jhgd">Hello</a>
      <section className="carousel-container">
        <div className="carousel-slider" id="slider">
          {Irray.map((e, i) => (
            <img
              key={"c-" + i}
              src={e}
              className="carousel-image"
              id={`pic_${i}`}
            />
          ))}
        </div>
      </section>
        <div className="indicator">
          <a href="#pic_0" onClick={()=>{

          }}>A</a>
          <a href="#pic_1">B</a>
          <a href="#pic_2">C</a>
          <a href="#pic_3">D</a>
        </div>
    </>
  );
};
export default Carousel;
