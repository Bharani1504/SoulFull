import React from "react";
import Image1 from "../Assests/img_1.png"
import Image2 from "../Assests/img_2.png"
import Image3 from "../Assests/img_3.png"

function Market(){
    return(
        <div className="Market-container">
            <div className="Market-text">
                <p>Soul-Full Stories</p>
            </div>
            <div className="Market-images">
                <img src={Image1} alt=""style={{margin:"0 0 0 50px"}}/>
                <img src={Image2} alt="" style={{margin:"0 50px 0 30px"}}/>
                <img src={Image3} alt=""style={{margin:"0 -20px 0 0"}}/>
            </div>
        </div>
        
    )
}

export default Market