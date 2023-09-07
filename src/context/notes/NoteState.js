import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 = {
        "name": "Krishana",
        "class": "8b" 
    }
    const[state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                    "name": "shreeKrishana",
                    "class": "12b" 
                })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state: state, update: update}}>
            {props.children}
        </NoteContext.Provider>
    )
}   


export default NoteState;