import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const Project = ({ heading, works }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {works.map((data, index) => (
            <ProjectCard key={`dummy-${index}`} id={`dummy-${index}`} value={data} />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
