import React from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom";
import NavBar from "./navbar"; 
import Education from "./component/Education";
import Contact from "./component/Contact";

function Routing() {
    return (
  
   <Router>
    <Routes>
      
          <Route path="/" element={<NavBar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
    </Routes>
   
   </Router>  

    )
  }
  
  export default Routing;