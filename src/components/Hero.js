import React from "react";
import LeftHero from "../Assests/Hero-image-left.png";
import RightHero from "../Assests/Hero-image-right.png";

function Hero () {
    return(
        <div className="Hero-entire">
            <div className="Hero-left-part">
            <img src={LeftHero} alt=""/>       
            </div>
            <div className="Hero-right-part">
            <img src={RightHero} alt="" />
            </div>
            
        </div>
    )
}

export default Hero