import React from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{

const state ={
    "name":"Naveen",
    "class":"Btech"
}

    return (

    <NoteContext.Provider value={state}>
       {props.children}
    </NoteContext.Provider>
    )

}
export default NoteState;