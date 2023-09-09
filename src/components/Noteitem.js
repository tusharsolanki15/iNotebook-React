import React, {useContext} from 'react'
import NoteContext from '../context/notes/noteContext';

export const Noteitem = (props) => {
    const context =  useContext(NoteContext);
    const {deleteNote} = context;
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-2" >
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>
                        <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}