import React, { useState } from "react";

export default function TextForm(props) {
  //Uppercase Handler
  const handleUpClick = () => {
    console.log("Uppercase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  //Lowercase Handler
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //Clear Text Handler
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  //Inverse Handler
  const handleInverseClick = () => {
    let newText = "";
    for(let i = 0; i < text.length; i++){
        if(text[i] === text[i].toUpperCase()){
            newText += text[i].toLowerCase();
        }else{
            newText += text[i].toUpperCase();
        }
    }
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleInverseClick}>
          Inverse Text
        </button>
      </div>

      <div className="container my-5">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2 className="my-2">Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
