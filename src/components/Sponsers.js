import React from "react";
import SponsersImage from "../Assests/sponsers.png"
function Sponsers() {
  return (
    <div className="Sponsers-container">
      <div className="proverbs">
        <div className="proverb-card">
          <p>“Strong option to share your thoughts”<br/> -Forbes Health</p>
        </div>
        <div className="proverb-card">
          <p>“Best for depression therapy”<br/> -Very well mind</p>
        </div>
        <div className="proverb-card">
          <p>“Online therapy website to try asap”<br/> -VOGUE</p>
        </div>
      </div>
      <div className="Sponsers-image">
        <img src={SponsersImage} alt="" />
      </div>
    </div>
  );
}

export default Sponsers;
