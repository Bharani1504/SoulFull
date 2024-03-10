import React from "react";
import"./Navbar.css";

function Navbar(){
    return(
        <div className="Navbar-container">
            <div className="Navbar-left">
                <h3>SoulFull</h3>
            </div>
            <div className="Navbar-right">
                <a href="#">Journal</a>
                <a href="#">Exercising</a>
                <a href="#">Consultant</a>
                <a href="#">Pricing</a>
                <a href="#" className="login">Login </a>
                <div className="Navbar-Login">
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar