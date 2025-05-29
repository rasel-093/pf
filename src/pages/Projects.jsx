import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import todoapp from "../assets/projects/todoapp.jpg";
import money_management from "../assets/projects/money_management.png";
import landmark_recognition from "../assets/projects/landmark_recognition.jpg";
import eventhub from "../assets/projects/eventhub.png";


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
              imgPath={eventhub}
              isBlog={false}
              title="EventHub"
              description="EventHub is a platform for managing events, allowing users to create and manage events. It includes features for event creation, deletion, cost estimation and others management, making it easy for users to stay organized and connected."
              ghLink="https://github.com/rasel-093/EventHub"
            />
          </Col>
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
              ghLink="https://github.com/rasel-093/Money_Management1"
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
        </Row>
      </Container>
    </Container>
  )
}

export default Projects