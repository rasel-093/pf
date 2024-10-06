import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import todoapp from "../assets/projects/todoapp.jpg";
import money_management from "../assets/projects/money_management.png";
import landmark_recognition from "../assets/projects/landmark_recognition.jpg";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="TodoApp"
              description="TodoApp helps users manage tasks efficiently. It includes features to filter tasks by categories such as all, today, tomorrow, missed, and done. Users can add tasks with a specific date and time. Tasks can be easily deleted by swiping."
              ghLink="https://github.com/rasel-093/TodoApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money_management}
              isBlog={false}
              title="Money Management"
              description="In Money Management app users can add transactions and select categories like Tea, Salary, Gift, and more. Transactions are grouped into Income and Expense, with income shown in black and expenses in red. The app also has an Overview tab with graphs and a Tips tab that offers tips based on monthly transactions."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landmark_recognition}
              isBlog={false}
              title="Landmark Recognition"
              description="app that recognizes landmarks using a machine learning model. Users can take a photo, and the app identifies the landmark."
              ghLink="https://github.com/rasel-093/LandMark_RecogNition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects