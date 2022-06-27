import React, { useContext } from "react";
import ComC from "./ComC";

import { ContextApi } from "./App";
const ComB =()=>{
const fName = useContext(ContextApi)
    return (
        <>
        <h3>Component  B Data developer name  {fName}</h3>
       <ComC/>
        <p>Note: Keep the following tips while trying number patterns using JavaScript.</p>
        </>
    )
}

export default ComB