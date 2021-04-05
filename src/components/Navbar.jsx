import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, about, skills } from "../config/config.js";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  const getTopDom = () => document.getElementById("top-sign");
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + getTopDom().offsetTop - navbarDimensions.bottom > 5 ? setIsTop(true) : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    setTimeout(() => {
      try {
        if (!navbarDimensions) return;
        navBottom - scrollPosition >= getTopDom().offsetTop ? setIsTop(false) : setIsTop(true);
      } catch (e) {
        console.log(e);
      }
    }, 100);
  }, [navBottom, navbarDimensions, getTopDom(), scrollPosition]);

  return (
    <Navbar ref={navbarMenuRef} className={` fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"}`} expand="lg">
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`${mainBody.firstName}`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#projects"}>
            Projects
          </Nav.Link>

          <Nav.Link className="nav-link lead" href={about.resume} target="_blank" rel="noreferrer noopener">
            Resume
          </Nav.Link>

          {about.show && (
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#aboutme"}>
              About
            </Nav.Link>
          )}

          {skills.show && (
            <Nav.Link className="nav-link lead" href={process.env.PUBLIC_URL + "/#skills"}>
              Skills
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
