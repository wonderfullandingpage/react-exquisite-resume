import React from "react";
import Typist from "react-typist";
import ParticlesBg from "particles-bg";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const MainBody = React.forwardRef(({ gradient, title, message, icons }, ref) => {
  return (
    <Jumbotron
      fluid
      id="home"
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <ParticlesBg type="circle" bg={true} />

      <Container className="text-center">
        <h1 ref={ref} className="display-1">
          <b>{title}</b>
        </h1>

        <Typist className="lead typist" cursor={{ show: false }}>
          {" "}
          {message}
        </Typist>
        <div className="p-5">
          {icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split("-")[1]}`}
            >
              <i className={`fab ${icon.image}  fa-3x socialicons`} />
            </a>
          ))}
        </div>
        <a className="btn btn-outline-light btn-lg " href="#aboutme" role="button" aria-label="Learn more about me">
          More about me
        </a>
      </Container>
    </Jumbotron>
  );
});

export default MainBody;
