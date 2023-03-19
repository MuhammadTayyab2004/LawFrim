import React from "react";

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./MainComponents/Home";
import PracticeAreas from "./MainComponents/PracticeAreas";
import Attorneys from "./MainComponents/Attorneys";
import About from "./MainComponents/About";
import Contact from "./MainComponents/Contact";



function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/practiceareas" element={<PracticeAreas />} />
        <Route exact path="/attorneys" element={<Attorneys />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );

}

export default App;
