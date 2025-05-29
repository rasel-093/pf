import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAndroidstudio,
  SiVisualstudiocode,
  SiPostman,
  SiPycharm,
  SiChatbot,
  SiFigma
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Android Studio</h3>
        <SiAndroidstudio/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Visual Studio Code</h3>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Postman</h3>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Figma</h3>
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>PyCharm</h3>
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Chatbot</h3>
        <SiChatbot />
      </Col>
    </Row>
  );
}

export default Toolstack;
