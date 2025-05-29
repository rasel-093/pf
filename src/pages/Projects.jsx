import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import todoapp from "../assets/projects/todoapp.jpg";
import money_management from "../assets/projects/money_management.png";
import landmark_recognition from "../assets/projects/landmark_recognition.jpg";
import eventhub from "../assets/projects/eventhub.png";
import counselling from "../assets/projects/counselling.png";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center mb-4">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p className="text-center text-white mb-5">
          Here are a few projects I've worked on recently.
        </p>
        <Row className="g-4 justify-content-center">
          <Col lg={4} md={4} sm={6} className="d-flex justify-content-center">
            <ProjectCard
              imgPath={eventhub}
              isBlog={false}
              title="EventHub"
              description="A modern event management app where users can create events and add services. Providers can manage service requests and approve bookings."
              ghLink="https://github.com/rasel-093/EventHub"
            />
          </Col>
          <Col lg={4} md={4} sm={6} className="d-flex justify-content-center">
            <ProjectCard
              imgPath={counselling}
              isBlog={false}
              title="Counselling"
              description="Counseling App is a mental wellness tool offering breathing exercises, soothing audio, and motivational quotes to reduce stress."
              ghLink="https://github.com/rasel-093/Counselling"
            />
          </Col>
          <Col lg={4} md={4} sm={6} className="d-flex justify-content-center">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="TodoApp"
              description="Helps users manage tasks efficiently with filter options like today, tomorrow, missed, and done. Swipe to delete tasks."
              ghLink="https://github.com/rasel-093/TodoApp"
            />
          </Col>
          <Col lg={4} md={4} sm={6} className="d-flex justify-content-center">
            <ProjectCard
              imgPath={money_management}
              isBlog={false}
              title="Money Management"
              description="Track income and expenses, visualize spending with Pie & Bar charts, and receive personalized saving tips."
              ghLink="https://github.com/rasel-093/Money_Management1"
            />
          </Col>
          <Col lg={4} md={4} sm={6} className="d-flex justify-content-center">
            <ProjectCard
              imgPath={landmark_recognition}
              isBlog={false}
              title="Landmark Recognition"
              description="A landmark identification app using a trained ML model. Snap a picture to detect the landmark in real-time."
              ghLink="https://github.com/rasel-093/LandMark_RecogNition"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
