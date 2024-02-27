import React from "react";

import { useState } from "react";

export default function Textpage(props) {
    const [text, setText] = useState("Enter your text here");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked", + text)
        let newText = text.toUpperCase();
        setText(newText)
    }


    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    
  return (
    <div>
        <h1>{props.Headings}</h1>
      <div className="mb-3">
       
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={handleOnChange}
        ></textarea>
         <button className="btn btn-primary mt-2" onClick={handleUpClick} >Convert to uppercase</button>
      </div>


    </div>
  );
}
