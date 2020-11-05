import React from 'react'

import './carousel.css'

const Carousel = ()=>{
    return(
        <>
            <section className="carousel-container">
                <div className="carousel-slider">
                    <div key="c-1" className="carousel-image" id="pic1"></div>
                    <div key="c-2" className="carousel-image" id="pic2"></div>
                    <div key="c-3" className="carousel-image" id="pic3"></div>
                    <div key="c-4" className="carousel-image" id="pic4"></div>
                    <div key="c-5" className="carousel-image" id="pic5"></div>
                    <div key="c-6" className="carousel-image" id="pic6"></div>
                </div>
                <div className="indicator">
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </section>
        </>
    )
}
export default Carousel;