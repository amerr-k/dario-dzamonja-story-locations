import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css"; // Import the CSS file for styling

const About: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nulla eu nibh pellentesque, in fringilla metus rhoncus. Praesent
            tempus massa ut tortor eleifend elementum. Sed eleifend luctus
            justo, eu rhoncus nisi tincidunt vitae.
          </p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nulla eu nibh pellentesque, in fringilla metus rhoncus. Praesent
            tempus massa ut tortor eleifend elementum. Sed eleifend luctus
            justo, eu rhoncus nisi tincidunt vitae.
          </p>

          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            nulla eu nibh pellentesque, in fringilla metus rhoncus. Praesent
            tempus massa ut tortor eleifend elementum. Sed eleifend luctus
            justo, eu rhoncus nisi tincidunt vitae.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
