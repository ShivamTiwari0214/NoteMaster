import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/note/NoteState";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alert from "./components/alert/Alert";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <NoteState showAlert={showAlert}>
    <Router>
      <Navbar />
      <Alert alert={alert}></Alert>
      <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Home" element={<Home showAlert={showAlert}/>} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login showAlert={showAlert}/>}/>
        <Route path="/signup" element={<Signup showAlert={showAlert}/>}/>
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
