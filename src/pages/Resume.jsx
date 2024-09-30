// import React, { useState, useEffect } from "react";
// import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { AiOutlineDownload } from "react-icons/ai";

// import Particle from '../components/Particle'
// // import pdf from "../assets/rasel.pdf"

// import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// // const resumeLink = 'https://github.com/rasel-093/pf/blob/ffa092314b21f2654767098c385aabbeec7779fb/src/assets/rasel.pdf?raw=true'
// const resumeLink = '/rasel.pdf'


// const Resume = () => {
//   const [width, setWidth] = useState(1200);

//   useEffect(() => {
    
//     setWidth(window.innerWidth);
//   }, []);

//   return (
//     <div>
//       <Container fluid className="resume-section">
//         <Particle />
//         <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={resumeLink}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download Resume
//           </Button>
//         </Row>

//         <Row className="resume">
//           <Document file={resumeLink} className="d-flex justify-content-center">
//             <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//           </Document>
//         </Row>

//         {/* <Row style={{ justifyContent: "center", position: "relative" }}>
//           <Button
//             variant="primary"
//             href={pdf}
//             target="_blank"
//             style={{ maxWidth: "250px" }}
//           >
//             <AiOutlineDownload />
//             &nbsp;Download Resume
//           </Button>
//         </Row> */}
//       </Container>
//     </div>
//   )
// }

// export default Resume

import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import Particle from '../components/Particle';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import './Resume.css';  // Import custom CSS for scrolling

// Load pdf.worker.js from a CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Use local pdf from the public folder
const resumeLink = "/rasel.pdf"; 

const Resume = () => {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null); // Store the number of pages

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // When the PDF is successfully loaded, get the number of pages
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink} // Linking to the local pdf for download
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>

        <Row className="resume-scrollable">  {/* Custom CSS class for scrolling */}
          <Document
            file={resumeLink}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-block justify-content-center"  // Ensure block layout
          >
            {/* Render all pages */}
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
                className="resume-page" 
              />
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;

