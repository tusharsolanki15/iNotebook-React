import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "64f0cdaac39f422cad622a30",
          "user": "64f0b08f2e962093baf09f4b",
          "title": "getup updated",
          "description": "early in morning updated",
          "tag": "updated",
          "date": "2023-08-31T17:28:10.328Z",
          "__v": 0
        },
        {
          "_id": "64f2eb960513ee4b9f0105b4",
          "user": "64f0b08f2e962093baf09f4b",
          "title": "getup",
          "description": "early in morning",
          "tag": "General",
          "date": "2023-09-02T08:00:22.307Z",
          "__v": 0
        },
        {
            "_id": "64f0cdaac39f422cad622a32",
            "user": "64f0b08f2e962093baf09f4b",
            "title": "getup updated",
            "description": "early in morning updated",
            "tag": "updated",
            "date": "2023-08-31T17:28:10.328Z",
            "__v": 0
          },
          {
            "_id": "64f2eb960513ee4b9f0105b9",
            "user": "64f0b08f2e962093baf09f4b",
            "title": "getup",
            "description": "early in morning",
            "tag": "General",
            "date": "2023-09-02T08:00:22.307Z",
            "__v": 0
          },
          {
            "_id": "64f0cdaac39f422cad622a90",
            "user": "64f0b08f2e962093baf09f4b",
            "title": "getup updated",
            "description": "early in morning updated",
            "tag": "updated",
            "date": "2023-08-31T17:28:10.328Z",
            "__v": 0
          },
          {
            "_id": "64f2eb960513ee4b9f010521",
            "user": "64f0b08f2e962093baf09f4b",
            "title": "getup",
            "description": "early in morning",
            "tag": "General",
            "date": "2023-09-02T08:00:22.307Z",
            "__v": 0
          }
      ]
      const [notes, setNotes] =  useState(notesInitial)

      // Add a Note
      const addNote = (title, description, tag) =>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {"_id": "64f2eb960513ee4b9f010521",
        "user": "64f0b08f2e962093baf09f4b",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2023-09-02T08:00:22.307Z",
        "__v": 0}
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote = (id) =>{
        console.log("Deleting a note with id: ", id);
        const newNotes = notes.filter((note)=>{return note._id!=id});
        setNotes(newNotes);
      }

      // Edit a Note
      const editNote = () =>{
        
      }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}   


export default NoteState;