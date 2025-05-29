
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard({ imgPath, title, description, ghLink }) {
  return (
    <Card className="project-card-view shadow-lg border-0 rounded-4">
      <Card.Img
  variant="top"
  src={imgPath}
  alt={title}
  style={{
    width: "100%",
    height: "450px", // Increased height
    objectFit: "contain", // Avoid cropping
    padding: "1rem",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem"
  }}
/>


      <Card.Body className="bg-dark text-white p-4">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="warning" href={ghLink} target="_blank">
          View Code
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;

