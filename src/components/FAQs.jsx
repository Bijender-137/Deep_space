import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Container, Row } from "react-bootstrap";
import AlianSpace2 from "../assets/img/png/alian_4.png";
const FAQs = () => {
  return (
    <>
      <section className="bg_clr_slider overflow-hidden py-5">
        <Container>
          <div className="text-center">
            <h2 className="ff_grand fw-medium fs_70">FAQs</h2>
          </div>
          <Row className="py-5 flex-column-reverse flex-lg-row">
            <Col lg={8} className="mt-4 mt-lg-0">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mt-3">
                  <Accordion.Header>
                    2. Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mt-3">
                  <Accordion.Header>
                    2. Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mt-3">
                  <Accordion.Header>
                    2. Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mt-3">
                  <Accordion.Header>
                    2. Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col lg={4}>
              <div className="text-center">
                <img className="alian_astronote w_300" src={AlianSpace2} alt="AlianSpace2" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FAQs;
