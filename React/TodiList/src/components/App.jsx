import React, { useState } from "react";

function App() {
  const [note, handleNote] = useState("");

  function handleChange(value) {
    console.log(value);
    handleNote(value);
  }

  const [addNote, handleAddNote] = useState([]);

  function handleClick() {
    handleAddNote((prevNotes) => {
      return [...prevNotes, note];
    });
    handleNote("");
  }

  const handleKeyPress = (key) => {
    key === "Enter" && handleClick();
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          value={note}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={(k) => { handleKeyPress(k.key) }
          }
          type="text"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* <ul>
          {addNote.map((everyNote) => (
            <li> {everyNote} </li>
          ))}
        </ul> */}
        {addNote.map((everyNote) => {
          return <div>
            <input type="checkbox" id={everyNote} name={everyNote} value={everyNote} />
            <label for="vehicle1"> {everyNote}</label>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
