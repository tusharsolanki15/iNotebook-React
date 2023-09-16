import React,{useEffect, useContext} from 'react'
import NoteContext from '../context/notes/noteContext';

export const User = () => {
  const context = useContext(NoteContext);
  const {user, getUser} = context;

  useEffect(() => {
      getUser()
      //  eslint-disable-next-line
    },[])
  
  return (
    <div>
      <form>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="name" className="form-control" id="name"  aria-describedby="emailHelp" value={user.name} readOnly />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  value={user.email} readOnly />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">ID</label>
          <input type="id" className="form-control" id="id"  value={user.id} readOnly/>
        </div>
      </form>
    </div>
  )
}
