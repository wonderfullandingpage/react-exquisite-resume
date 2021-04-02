import React from "react";
import Container from "react-bootstrap/Container";

const Footer = props => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        Nice LandingPage Template
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
