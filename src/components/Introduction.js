import React from "react";
import smallImages from "../Assests/smallImages.png";
import IntroImage from "../Assests/IntroImage.png"

function Introduction () {
    return (
        <div className="Intro-container">
            <div className="Intro-text-part">
                <div className="Intro-Image">
                    <img src={smallImages} alt=""/>
                </div>
                <div className="Intro-heading">
                <p><b>Mental Health</b> is not a Destination, but a <b>Process</b></p>
                </div>
                <div className="Intro-subheading">
                <p>Our work has resulted in positive change. We have educated millions about mental health conditions and reduced barriers to treatment and services</p>
                </div>
                <button>Get Started</button>
            </div>
            <div className="Intro-image-part">
                <img src={IntroImage} alt=""/>
            </div>
        </div>
    )
}

export default Introduction