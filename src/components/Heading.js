import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  Link,
  useLocation
} from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";
import Custombutton from "./Custombutton";
import {useRef} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';

function Heading(props) {
  const navigate = useNavigate();

  const [currentMenu, setMenu] = useState("HOME");
  function header() {
    return(
    <mainheader>
        <buttonheader>
          <Custombutton page = "HOME" setMenu = {setMenu} currentMenu = {currentMenu}></Custombutton>
          <Custombutton page = "PROJECTS" setMenu = {setMenu} currentMenu = {currentMenu}></Custombutton>
          <Custombutton page = "CONTACT" setMenu = {setMenu} currentMenu = {currentMenu}></Custombutton>
        </buttonheader>
        <socials>
          <Link to="https://github.com/DylanConnol">
            <img src="github.png" className="imageLink" width = {20} height = {20} />
          </Link>
          <Link to="https://www.linkedin.com/in/dylan-connolly-b65480266/">
            <img src="linkedin.png" className="imageLink" width = {20} height = {20} />
          </Link>
        </socials>
      </mainheader>)
  }


  return (
    <div>
    {header()}
      <AnimatePresence mode='wait'>
      {currentMenu === "PROJECTS" && <Projects key = "test1" exitdirection = {-1}/>}
      {currentMenu === "CONTACT" && <Contact key = "test2" exitdirection = {-1}/>}
      {currentMenu === "HOME" && <Home key = "test3" exitdirection = {-1}/>}


      </AnimatePresence>
    </div>
  );
}

export default Heading;
