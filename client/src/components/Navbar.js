import { React, useContext } from "react";
import { Link ,useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/note/noteContext";

function Navbar () {
  const {setState} = useContext(noteContext);
  const navigate = useNavigate();
    let location = useLocation();

//   React.useEffect(() => {
    
//   }, [location]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NoteMaster</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname ===`/Home`?`active`:`inactive`}`} to="/Home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link ${location.pathname ===`/About`?`active`:`inactive`}`} to="/About">About</Link>
        </li>
      </ul>
     {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-primary mx-3" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary" to="/signup" role="button">Signup</Link>
      </form>:<button className="btn btn-primary" onClick={()=>{localStorage.removeItem('token');navigate('/login');setState([])}}>Logout</button>}
    </div>
  </div>
</nav>
    )
}

export default Navbar ;