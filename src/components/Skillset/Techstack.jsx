import React from "react";
import { Col, Row } from "react-bootstrap";
// import {
//   DiReact
// } from "react-icons/di";
import {
  SiKotlin,
  SiJava,
  SiFirebase,
  SiSqlite,
  SiPython,
  SiDjango,
  SiC,
  SiCplusplus,
  SiFlutter
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
       <h3>Kotlin</h3>
        <SiKotlin />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Java</h3>
        <SiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Flutter</h3>
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Python</h3>
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Django</h3>
        <SiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>Firebase</h3>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>SQLite</h3>
        <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>C</h3>
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h3>C++</h3>
        <SiCplusplus />
      </Col>
    </Row>
  );
}

export default Techstack;
