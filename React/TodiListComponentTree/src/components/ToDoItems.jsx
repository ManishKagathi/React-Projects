import React from "react";

export default function ToDoItems(props) {

  function deleteItem(id) {
    handleAddNote(prevNote => {
      return prevNote.filter((currentNote, index) => {
        return index !== id;
      });
    });

    return (
      <div onClick={
        () => {
          deleteItem(props.id)
        }
      } >
        <li > {props.text} </li>
      </div>
    );
  }
} 