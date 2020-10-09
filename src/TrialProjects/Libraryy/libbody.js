import React from 'react';
import images from './img';


const Libbody =()=>{
    

    return(
        <>
             <div className="lib-body" style={{"gridTemplateRows":`repeat(${(images.length)/3},18fr) 6fr`}}>
                {images.map(({src}) =><div className="libra-types"> <img src={src}  /></div>)}
                <div className="libra-types" id="lib14">  <img src={images[1].src} alt=""/> </div>
                <div className="libra-types" id="lib15">  <img src={images[1].src} alt=""/> </div>
                <div className="libra-types" id="lib16">  <img src={images[1].src} alt=""/> </div>
                </div>
               
        </>
    )
};
export default Libbody;
