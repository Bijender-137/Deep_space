import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GifImgMan from "../assets/img/png/gif_img_man.gif";
import Space1 from "../assets/img/png/space_1.png";
import Space2 from "../assets/img/png/space_2.png";
const AboutAs = () => {
  return (
    <>
      <section className="bg_img_main_Section py-5 position-relative overflow-hidden">
        
          <img
            className="position-absolute space_1_img_set d-none d-lg-block"
            src={Space1}
            alt="Space1"
          />
          <img
            className="position-absolute space_2_img_set d-none d-sm-block"
            src={Space2}
            alt="Space2"
          />
      
        <Container className="py-5">
          <Row className="align-items-center ">
            <Col lg={6}>
              <div className="d-flex justify-content-center zn-1">
                <img className="w-75 img_border" src={GifImgMan} alt="GifImgMan" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="pt-5 text-center text-lg-start">
                <h1 className="ff_grand fw-semibold fs_70 ">About Us</h1>
                <p className="ff_grand fw-normal fs_18 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  augue in pharetra euismod at amet. Neque ultrices vitae at
                  eget nisi, eget tellus tincidunt amet. Blandit pharetra,
                  viverra feugiat consectetur neque risus.
                  <br /> At nunc, gravida nunc cursus gravida nulla enim. Tempor
                  gravida massa eu, enim metus ridiculus feugiat at. Leo libero,
                  ac feugiat nunc, elementum quis tristique.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutAs;
