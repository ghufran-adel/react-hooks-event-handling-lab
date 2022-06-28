// Code EyesOnMe Component Here
import React from "react";


export default function EyesOnMe () {

    function Onfoucs(){
        console.log('Good!')
    }

    function onBlur(){
        console.log('Hey! Eyes on me!')
        
    }
    return(
        <div>
        <button onBlur={onBlur} onFocus={Onfoucs}>Eyes on me</button>
        </div>
    )
}
