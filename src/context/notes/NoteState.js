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
    console.log(json) 
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

    console.log("Adding a new note")
    const note = {
      "_id": "64f2eb960513ee4b9f010521",
      "user": "64f0b08f2e962093baf09f4b",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-09-02T08:00:22.307Z",
      "__v": 0
    }
    // setNotes(notes.concat(note))
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
    console.log(json)

    console.log("Deleting a note with id: ", id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes);
  }

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALL
    const url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMGIwOGYyZTk2MjA5M2JhZjA5ZjRiIn0sImlhdCI6MTY5MzQ5NTUyNH0.upoPqe63rnusHxFRPFyEifiE7mBfSRRpV-st_n6myM0"
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();
  
  // Logic to edit in client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }

  }

}

return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
    {props.children}
  </NoteContext.Provider>
)
}


export default NoteState;