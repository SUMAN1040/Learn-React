import React, { useState } from "react";

export default function TextForm(props) {
  //Uppercase Handler
  const handleUpClick = () => {
    console.log("Uppercase button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  //Lowercase Handler
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  //Clear Text Handler
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  //Inverse Handler
  const handleInverseClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }
    setText(newText);
  };

  //Copy Text Handler
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  //Remove Space Handler
  const handleRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleInverseClick}
        >
          Inverse Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleRemoveSpace}
        >
          Remove Space
        </button>
      </div>

      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} charecters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2 className="my-2">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
