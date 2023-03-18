import React from "react";
import { Container } from "react-bootstrap";
import FooterDeep from "../assets/img/png/deep_space_footer.png";
import Icon1 from "../assets/img/svg/icon_1.svg";
import Icon2 from "../assets/img/svg/icon_2.svg";
import Icon3 from "../assets/img/svg/icon_3.svg";
import Icon4 from "../assets/img/svg/icon_4.svg";
import Icon5 from "../assets/img/svg/icon_5.svg";
import Icon6 from "../assets/img/svg/icon_6.svg";
import FooterMan from "../assets/img/png/footer-man.png";
const MyFooter = () => {
  return (
    <>
      <section className="bg_img_footer pt-5 position-relative ">
        <img
          className="position-absolute footer_man_position d-none d-lg-block"
          src={FooterMan}
          alt="FooterMan"
        />
        <Container>
          <div className="pt-md-5 d-flex flex-column justify-content-center align-items-center">
            <img className="pt-5" src={FooterDeep} alt="FooterDeep" />
            <div className="d-flex align-items-center py-5">
              <a href="#">
                <img
                  className="footer_scale transition_time"
                  src={Icon1}
                  alt="Icon1"
                />
              </a>
              <a href="#" className="ms-2 ms-sm-4">
                <img
                  className="footer_scale transition_time"
                  src={Icon2}
                  alt="Icon1"
                />
              </a>
              <a href="#" className="ms-2 ms-sm-4">
                <img
                  className="footer_scale transition_time"
                  src={Icon3}
                  alt="Icon1"
                />
              </a>
              <a href="#" className="ms-2 ms-sm-4">
                <img
                  className="footer_scale transition_time"
                  src={Icon4}
                  alt="Icon1"
                />
              </a>
              <a href="#" className="ms-2 ms-sm-4">
                <img
                  className="footer_scale transition_time"
                  src={Icon5}
                  alt="Icon1"
                />
              </a>
              <a href="#" className="ms-2 ms-sm-4">
                <img
                  className="footer_scale transition_time"
                  src={Icon6}
                  alt="Icon1"
                />
              </a>
            </div>
          </div>
        </Container>
        <div className="text-center pt-5 pb-3">
          <h2 className="ff_inter fs_12">Copyright@2022DeepSpaceBrawl.com</h2>
        </div>
      </section>
    </>
  );
};

export default MyFooter;
