import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, I am <span className="yellow">Md Rasel Rahman </span>
                 from <span className="yellow"> Jashore, Bangladesh.</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in Computer Science and Engineering in 2021.
                <br />
                <br />
                  As a
                  <b className="yellow"> Mobile app developer </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="yellow"> Kotlin, </b>
                    as well as have knowledge in programming languages such as Java, C, C++, Python. I am well experienced in android development using
                  {/* <b className="yellow"> GraphQL, and Solidity.</b> */}
                  <b className="yellow"> Jetpack Compose and XML. </b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Swift</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Python libraries and frameworks
                    </b>
                  </i>
                  {/* &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br /> */}
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence and Machine Learning.</b>
                  </i>
                  <br />
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/rasel-093"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://x.com/rasel_093"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/rasel093/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/rasel-093/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About