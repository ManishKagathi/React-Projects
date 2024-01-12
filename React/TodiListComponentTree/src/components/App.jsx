import React, { useState } from "react";
import ToDoItems from "../components/ToDoItems";
import InputArea from "../components/InputArea";

function App() {
  const [addNote, handleAddNote] = useState([]);

  function handleClick(note) {
    handleAddNote((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteItem(id){
    handleAddNote(prevNote =>{
      return prevNote.filter((currentNote,index) =>{
        return index !== id;
      });
    });    
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        OnClicked= {handleClick}
        />
     
      <div>
        <ul>
          {addNote.map((everyNote, index) => (
            <ToDoItems 
            key = {index}
            id ={index}
            text ={everyNote}
            onChecked ={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
          }

export default App;
