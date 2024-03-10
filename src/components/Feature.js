import React from "react";
import FeatureImage1 from "../Assests/Feature1.png";
import FeatureImage2 from "../Assests/Feature2.png";
import FeatureImage3 from "../Assests/Feature3.png";
import FeatureImage4 from "../Assests/Feature4.png";

function Feature() {
  return (
    <div className="Feature-container">
      <div className="Feature-text-part">
        <p>Finding Happiness through others</p>
      </div>
      <div className="Feature-image-part">
        <img src={FeatureImage1} alt="" />
        <img src={FeatureImage2} alt="" />
        <img src={FeatureImage3} alt="" />
        <img src={FeatureImage4} alt="" />
      </div>
    </div>
  );
}

export default Feature;
