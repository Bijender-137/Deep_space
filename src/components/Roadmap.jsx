import React from "react";
import { Container } from "react-bootstrap";
import RoadmapImg from "../assets/img/png/road_map.png";
import flyingSpace from "../assets/img/png/flying-space -1.gif";
import PhaseIcon from "../assets/img/png/phase_1_icon.png";
import PhaseIcon2 from "../assets/img/png/phase_2_icon.png";
import RoadRocket from "../assets/img/png/roadmap_rocket_1.png";
import AlianRoadmap from "../assets/img/png/alian_2_roadmap.png";
import Rocket2 from "../assets/img/png/rocket-2-roadmap.png";
import AstroNote from "../assets/img/png/astronote.png";
const Roadmap = () => {
  return (
    <>
      <section className="bg_clr_slider position-relative py-5 overflow-hidden">
        <div>
          <img
            className="position-absolute rocket_position_1 d-none d-lg-block"
            src={RoadRocket}
            alt="RoadRocket"
          />
          <img
            className="position-absolute alian_position_img d-none d-lg-block"
            src={AlianRoadmap}
            alt="AlianRoadmap"
          />
          <img
            className="position-absolute rocket_2 d-none d-lg-block"
            src={Rocket2}
            alt="Rocket2"
          />
          <img
            className="position-absolute astronote_space d-none d-lg-block"
            src={AstroNote}
            alt="AstroNote"
          />
        </div>
        <Container>
          <div className="text-center py-5">
            <h2 className="ff_grand fw-bold fs_7">Roadmap</h2>
          </div>
          <div className="text-center position-relative py-5 d-none d-lg-block">
            <img src={RoadmapImg} alt="RoadmapImg" />
            {/* phase 1*************************************** */}
            <div className="phase_1_border phase_1_set d-flex justify-content-center align-items-center">
              <img
                className=" border_100"
                width={84}
                src={flyingSpace}
                alt="flyingSpace"
              />
            </div>
            <img
              className="position-absolute phase_icon_1"
              src={PhaseIcon}
              alt="PhaseIcon"
            />
            <div className="phase_1_text text-start">
              <h2 className="ff_mandali fs_32 fw-normal">Phase 1</h2>
              <p className="ff_grand fw-normal fs_16 phase_1_text_width">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                ipsum fermentum augue non risus fermentum.
              </p>
            </div>
            {/* phase 2------------------- */}
            <div className="phase_1_border phase_2_position d-flex justify-content-center align-items-center">
              <img
                className=" border_100"
                width={84}
                src={flyingSpace}
                alt="flyingSpace"
              />
            </div>
            <img
              className="position-absolute phase_icon_2"
              src={PhaseIcon2}
              alt="PhaseIcon"
            />
            <div className="phase_2_text text-end">
              <h2 className="ff_mandali fs_32 fw-normal">Phase 2</h2>
              <p className="ff_grand fw-normal fs_16 phase_1_text_width">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                ipsum fermentum augue non risus fermentum.
              </p>
            </div>
            {/* phase 3************************************* */}
            <div className="phase_1_border phase_3_position d-flex justify-content-center align-items-center">
              <img
                className=" border_100"
                width={84}
                src={flyingSpace}
                alt="flyingSpace"
              />
            </div>
            <img
              className="position-absolute phase_icon_3"
              src={PhaseIcon}
              alt="PhaseIcon"
            />
            <div className="phase_3_text text-start">
              <h2 className="ff_mandali fs_32 fw-normal">Phase 3</h2>
              <p className="ff_grand fw-normal fs_16 phase_1_text_width">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                ipsum fermentum augue non risus fermentum.
              </p>
            </div>
            {/* phase*4***************************************** */}
            <div className="phase_1_border phase_4_position d-flex justify-content-center align-items-center">
              <img
                className=" border_100"
                width={84}
                src={flyingSpace}
                alt="flyingSpace"
              />
            </div>
            <img
              className="position-absolute phase_icon_4"
              src={PhaseIcon2}
              alt="PhaseIcon"
            />
            <div className="phase_4_text text-end">
              <h2 className="ff_mandali fs_32 fw-normal">Phase 4</h2>
              <p className="ff_grand fw-normal fs_16 phase_1_text_width">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                ipsum fermentum augue non risus fermentum.
              </p>
            </div>
            {/* phase 5************************************** */}
            <div className="phase_1_border phase_5_position d-flex justify-content-center align-items-center">
              <img
                className=" border_100"
                width={84}
                src={flyingSpace}
                alt="flyingSpace"
              />
            </div>
            <img
              className="position-absolute phase_icon_5"
              src={PhaseIcon}
              alt="PhaseIcon"
            />
            <div className="phase_5_text text-start">
              <h2 className="ff_mandali fs_32 fw-normal">Phase 5</h2>
              <p className="ff_grand fw-normal fs_16 phase_1_text_width">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                ipsum fermentum augue non risus fermentum.
              </p>
            </div>
          </div>
          <div class="timeline  d-lg-none">
            <div class="timeline_items left ">
              <div class="box  ">
                <p className="ff_mandali fs_32 fw-normal">Phase 1</p>
                <p className=" ff_grand fw-normal fs_16">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  ipsum fermentum augue non risus fermentum.
                </p>
              </div>
            </div>
            <div class="timeline_items right ">
              <div class="box">
                <p className="ff_mandali fs_32 fw-normal">Phase 2</p>
                <p className=" ff_grand fw-normal fs_16">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  ipsum fermentum augue non risus fermentum.
                </p>
              </div>
            </div>
            <div class="timeline_items left ">
              <div class="box ">
                <p className="ff_mandali fs_32 fw-normal">Phase 3</p>
                <p className=" ff_grand fw-normal fs_16">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  ipsum fermentum augue non risus fermentum.
                </p>
              </div>
            </div>
            <div class="timeline_items right ">
              <div class="box ">
                <p className="ff_mandali fs_32 fw-normal">Phase 4</p>
                <p className=" ff_grand fw-normal fs_16">
                  Venenatis scelerisque sit cras amet risus mattis. Dignissim
                  ipsum fermentum augue non risus fermentum.
                </p>
              </div>
            </div>
          </div>
          <div class="timeline_items left  d-lg-none">
            <div class="box ">
              <p className="ff_mandali fs_32 fw-normal">Phase 5</p>
              <p className=" ff_grand fw-normal fs_16">
                Venenatis scelerisque sit cras amet risus mattis. Dignissim
                ipsum fermentum augue non risus fermentum.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Roadmap;
