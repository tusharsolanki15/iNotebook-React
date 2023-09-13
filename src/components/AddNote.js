import React, {useContext, useState} from 'react'
import NoteContext from '../context/notes/noteContext';

export const AddNote = () => {
    const context =  useContext(NoteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e) =>{
            e.preventDefault();
            addNote(note.title, note.description, note.tag);
            setNote({title: "", description: "", tag: ""})
    } 

    const  onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">    
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="my-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title}  onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
                </div>
                
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
