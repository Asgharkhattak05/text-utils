import React from "react";
import { useState } from "react";

const TextForm = (props) => {
    
   
    const [text, setText]=useState("")

    const handelUpClick=()=>{
        setText("Convert To UpperCase")
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handelLrClick=()=>{
        let lowerText=text.toLowerCase();
        setText(lowerText);
    }
    const handelClearClick=()=>{
        let clearText="";
        setText(clearText)
    }
   
    const handleOnChange=(event)=>{
       setText(event.target.value)

    }
    const handelCopy =()=>{
        let cText=document.getElementById("textBox")
        cText.select();
        navigator.clipboard.writeText(cText.value)
    }
    return (
        <>
            
            <div className="container" style={{color: props.mode=== "dark" ? "white" : "black"}}>
            <h1  className="mb-3 mt-5 ms-3"  >{props.textbox}</h1>
                <textarea className="form-control" id="textBox" value={text} style={{backgroundColor: props.mode=== "dark" ? "gray" : "white",color:props.mode=== "dark" ? "white" : "black"}} onChange={handleOnChange} rows="10"></textarea>
                <button className="btn btn-primary mt-3 " onClick={handelUpClick} >Convert To UpperCase</button>
                <button className="btn btn-primary ms-3 mt-3" onClick={handelLrClick}>Convert To LowerCase</button>
                <button className="btn btn-primary ms-3 mt-3" onClick={handelClearClick}>Clear Text</button>
                <button className="btn btn-primary ms-3 mt-3" onClick={handelCopy}>Copy Text</button>
                

            </div>
            <div className="container" style={{color: props.mode=== "dark" ? "white" : "black"}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words {text.length} Charaters</p>
                <p>Take {0.008 * text.split(" ").length } Minutes To Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter your Text In Above TextArea To Preview Here"}</p>
            </div>
            
        </>
    )
};
export default TextForm; 