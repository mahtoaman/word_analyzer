import React, { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");
  const [btnText, setbtnText] = useState("UpperCase");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [themeBtn, setthemeBtn] = useState("Dark Mode");
  function handleTheme() {
    console.log("tried to change the theme");
    if (themeBtn === "Dark Mode") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setthemeBtn("Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setthemeBtn("Dark Mode");
    }
  }

  function handleChange(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  function handleClick() {
    console.log("button clikced");
    if (btnText === "Upper Case") {
      let upperCaseText = text.toUpperCase();
      setText(upperCaseText);
      setbtnText("LowerCase");
    } else {
      let lowerCaseText = text.toLowerCase();
      setText(lowerCaseText);
      setbtnText("Upper Case");
    }
  }
  function handleClearText() {
    setText("");
  }

  async function postData(e) {
    e.preventDefault();
    const res = await fetch("/createnotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        note: text,
      }),
    });
    // const res =  await res.json()
  }

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label for="exampleFormControlTextForm1" className="form-label">
            Enter your text here
          </label>
          <textarea
            method="POST"
            className="form-control"
            value={text}
            id="exampleFormControlTextForm1"
            rows="7"
            style={myStyle}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          {btnText}
        </button>
        <button
          type="button"
          className="btn btn-primary  mx-3"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleTheme}
        >
          {themeBtn}
        </button>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={postData}
        >
          Register
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words, and {text.split("").length}
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
