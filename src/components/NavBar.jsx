import React from "react";
import { Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="nav_bg_clr py-4">
          <Container>
            <ul className="d-flex align-items-center justify-content-end p-0 mb-0">
              <li>
                <a href="#" className="ff_grand fs_18 fw-normal text-white">
                  Home
                </a>
              </li>
              <li className="ms-3 ms-sm-5">
                <a href="#" className="ff_grand fs_18 fw-normal text-white">
                  About Us
                </a>
              </li>
              <li className="ms-3 ms-sm-5">
                <a href="#" className="ff_grand fs_18 fw-normal text-white">
                  Games
                </a>
              </li>
              <li className="ms-3 ms-sm-5">
                <a href="#" className="ff_grand fs_18 fw-normal text-white">
                  FAQs
                </a>
              </li>
              <li className="ms-3 ms-sm-5">
                <a href="#" className="ff_grand fs_18 fw-normal text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
