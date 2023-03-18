import React from "react";
import { Container } from "react-bootstrap";
import deepspace from "../assets/img/png/deep_space_img.png";
import ManDiamond from "../assets/img/png/man_diamond_img.png";
import ManCircel from "../assets/img/png/man_circel_img.png";
const HeroSection = () => {
  return (
    <>
      <section className="d-flex justify-content-center flex-column align-items-center flex-grow-1 position-relative overflow-hidden">
        <div className="w-25">
          <img
            className="position-absolute  w-25 diamond_img d-none d-sm-block"
            src={ManDiamond}
            alt="ManDiamond"
          />{" "}
        </div>
        <div className="w-25">
            <img
              className="position-absolute w-25 man_circel_position d-none d-sm-block"
              src={ManCircel}
              alt="ManCircel"
            />
        </div>

        <Container>
          <div className="d-flex justify-content-center flex-column align-items-center py-5 py-xl-0">
            <img className="w-75" src={deepspace} alt="deepspace" />
            <h2 className="ff_grand fs_18 fw-semibold text-white text_w_480 text-center mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              felis, dolor porta tincidunt consectetur nulla ac facilisis. Elit
              commodo amet, auctor et. Donec aliquet viverra in mauris nunc.
            </h2>
            <div className=" mt-5">
              <a
                href="#"
                className="ff_grand fs_24 fw_semibold text-white btn_play"
              >
                Play Now
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
