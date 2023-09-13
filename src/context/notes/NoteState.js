import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API CALL
    const url = `${host}/api/notes/fetchallnotes`
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMGIwOGYyZTk2MjA5M2JhZjA5ZjRiIn0sImlhdCI6MTY5MzQ5NTUyNH0.upoPqe63rnusHxFRPFyEifiE7mBfSRRpV-st_n6myM0"
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // API CALL
    const url = `${host}/api/notes/addnote`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMGIwOGYyZTk2MjA5M2JhZjA5ZjRiIn0sImlhdCI6MTY5MzQ5NTUyNH0.upoPqe63rnusHxFRPFyEifiE7mBfSRRpV-st_n6myM0"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async(id) => {
    const url = `${host}/api/notes/deletenote/${id}`
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMGIwOGYyZTk2MjA5M2JhZjA5ZjRiIn0sImlhdCI6MTY5MzQ5NTUyNH0.upoPqe63rnusHxFRPFyEifiE7mBfSRRpV-st_n6myM0"
      }
    });
    const json = response.json();

    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMGIwOGYyZTk2MjA5M2JhZjA5ZjRiIn0sImlhdCI6MTY5MzQ5NTUyNH0.upoPqe63rnusHxFRPFyEifiE7mBfSRRpV-st_n6myM0"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();

    
  // Logic to edit in client
  let newNotes = JSON.parse(JSON.stringify(notes))
  for (let index = 0; index < newNotes.length; index++) {
    const element = newNotes[index];
    if (element._id === id) {
      newNotes[index].title = title;
      newNotes[index].description = description;
      newNotes[index].tag = tag;
      break;
    }
    setNotes(newNotes)



  }

}

return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
    {props.children}
  </NoteContext.Provider>
)
}


export default NoteState;