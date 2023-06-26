import React from "react";
import { useNavigate } from "react-router-dom"



function NavBar() {
  
    const navigate = useNavigate();
    

  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="#"> </a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={() => navigate('/Contact')}>Contact</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#" onClick={() => navigate('/Education')}>Education</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>

  )
};
export default NavBar;