import React, {useState} from "react";
import "../Styles/DropDown.less";

function DropDown({title, selected, items}){

    const [open, changeOpen] = useState(false);

    function DropDownMenu(){
        changeOpen(!open)
    }
    
    console.log("DropDown");

    return(
        <div className="dropdown">      
            <h3>{title}</h3>
            <button className="button" onClick={DropDownMenu}></button>
                <div className= { open ? "chevron up" : "chevron"}></div>
            </div>
    );
}

export default DropDown;