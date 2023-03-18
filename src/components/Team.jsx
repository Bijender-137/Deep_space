import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImgFrame from "../assets/img/png/img_frame.png";
import Team1 from "../assets/img/png/team_img_1.png";
import Team2 from "../assets/img/png/team_img_2.png";
import Team3 from "../assets/img/png/tram_img_3.png";
import TeamGroup1 from "../assets/img/png/team_group_1.png";
import TeamGroup2 from "../assets/img/png/team_group_2.png";
import TeamGroup3 from "../assets/img/png/team_group_3.png";
const Team = () => {
  return (
    <>
      <section className="bg_clr_slider py-5">
        <Container>
          <div className="text-center">
            <h2 className="ff_grand fw-600 fs_70">Team</h2>
          </div>
          <Row className="text-center text-md-start py-5 d-none d-sm-flex">
            <Col sm={12} md={6} xl={4}>
              <div className="position-relative">
                <img src={ImgFrame} alt="ImgFrame" />
                <div>
                  <img
                    className="position-absolute team_1 "
                    src={Team1}
                    alt="Team1"
                  />
                  <p className="ff_grand fw-normal fs_18 position-absolute team_text">
                    Lorum Ipsum{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} xl={4}>
              <div className="position-relative mt-5 mt-md-0">
                <img src={ImgFrame} alt="ImgFrame" />
                <div>
                  <img
                    className="position-absolute team_1 "
                    src={Team2}
                    alt="Team1"
                  />
                  <p className="ff_grand fw-normal fs_18 position-absolute team_text">
                    Lorum Ipsum{" "}
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} xl={4}>
              <div className="position-relative mt-5 mt-xl-0 ">
                <img src={ImgFrame} alt="ImgFrame" />
                <div>
                  <img
                    className="position-absolute team_1  "
                    src={Team3}
                    alt="Team1"
                  />
                  <p className="ff_grand fw-normal fs_18 position-absolute team_text">
                    Lorum Ipsum{" "}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="text-center d-sm-none">
            <Col xs={12}>
              <div>
                <img className="w-75" src={TeamGroup1} alt="TeamGroup1" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="mt-4">
                <img className="w-75" src={TeamGroup2} alt="TeamGroup1" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="mt-4">
                <img className="w-75" src={TeamGroup3} alt="TeamGroup1" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
