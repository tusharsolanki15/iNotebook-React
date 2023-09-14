import './App.css';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import { Home } from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Alert } from './components/Alert';
import Login from './components/Login';
import Singup from './components/Singup';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <Alert message="This is iNotebook"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Singup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
