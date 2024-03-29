import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Redirect,
  Link,
  withRouter,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";
import Custombutton from "./Custombutton";

function Heading(props) {
  const navigate = useNavigate();

  const handleClick = (x) => {
    navigate(x);
    

  };


  return (
    <div>
      <mainheader>
        <buttonheader>
          <Custombutton page = "HOME" link = "/"></Custombutton>
          <Custombutton page = "PROJECTS" link = "/projects"></Custombutton>
          <Custombutton page = "CONTACT" link = "/contact"></Custombutton>
        </buttonheader>
        <socials>
          <Link to="https://github.com/DylanConnol">
            <img src="github.png" className="imageLink" width = {20} height = {20} />
          </Link>
          <Link to="https://www.linkedin.com/in/dylan-connolly-b65480266/">
            <img src="linkedin.png" className="imageLink" width = {20} height = {20} />
          </Link>
        </socials>
      </mainheader>
      <Routes>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>

        <Route></Route>
      </Routes>
    </div>
  );
}

export default Heading;
