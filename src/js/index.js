import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";

const Trafficlight = () => {

    const [light, setLight] = useState(null)

    const myStyle = {
        boxShadow: "0 0 80px #fff",        
        animation:"glow 0.8s linear infinite alternate",        
    }    
    
    const theRedClick = () => {
        setLight("red")
    }
    const theYellowClick = () => {
        setLight("yellow")
    }
    const theGreenClick = () => {
        setLight("green")
    }

    return (
        <div> 
            <div className="box">          
                <div className="light" id="red" onClick={theRedClick} style={light == "red" ? myStyle : null}></div>
                <div className="light" id="yellow" onClick={theYellowClick} style={light == "yellow" ? myStyle : null}></div>
                <div className="light" id="green" onClick={theGreenClick} style={light == "green" ? myStyle : null}></div>
            </div> 
        </div>
    )
}
//render your react application
ReactDOM.render(<Trafficlight />, document.querySelector("#app"));
