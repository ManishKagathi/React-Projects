import React, { useState } from "react";

export default function InputArea(props) {

  const [note, setNote] = useState("");

  function handleChange(value) {
    setNote(value);
  }

  const handleKeyPress = (key) => {
    key === "Enter" && props.OnClicke();
  }
  return (<div className="form">
    <input
      value={props.text}
      onChange={(e) => handleChange(e.target.value)}
      onKeyPress={(k) => { handleKeyPress(k.key) }
      }
      type="text"
    />
    <button onClick={
      () => {
        props.OnClicked(note);
        setNote("");
      }
    }>
      <span>Add</span>
    </button>
  </div>);

}

