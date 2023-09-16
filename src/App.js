import './App.css';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from './components/Alert';
import Login from './components/Login';
import Singup from './components/Singup';
import { useState } from 'react';
import { User } from './components/User';

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Singup showAlert={showAlert}/>} />
              <Route exact path="/userdetails" element={<User showAlert={showAlert}/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
