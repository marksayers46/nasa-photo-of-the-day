import React from "react";

const NavBar = (props) => {
    return(
        <div className="navBar">
            <div className="title">
                {props.text}
            </div>
            <div className="date">
                {props.date}
            </div>
        </div>
    )   
        
}


export default NavBar;