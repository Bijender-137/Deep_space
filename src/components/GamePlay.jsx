import React from "react";
import { Container } from "react-bootstrap";
import ManPlaying from "../assets/img/png/man_playing_img.png";
import VidioPlayer from "../assets/img/png/vidio_player_img.png";
import VidioPlayerBtn from "../assets/img/png/vidio_player_btn.png";
import AlianImg from "../assets/img/png/alian_space_img.png";
const GamePlay = () => {
  return (
    <>
      <section className="game_play_bg_img py-5 overflow-hidden">
        <Container className="position-relative">
          <div className="d- flex justify-content-end align-items-center">
            <div className="text-center">
              <h2 className="ff_grand fw-semibold fs_70">Game Play</h2>
            </div>
            <div className=" d-none d-lg-block">
              <img
                className="man_playing_set z-index-1"
                src={ManPlaying}
                alt="ManPlaying"
              />
            </div>
          </div>
          <div className="text-center mt-5 position-relative">
            <img className="w-100" src={VidioPlayer} alt="VidioPlayer" />
            <div className="vidio_btn_set">
              <a href="#">
                <img
                  className="w_100 w_25 "
                  src={VidioPlayerBtn}
                  alt="VidioPlayerBtn"
                />
              </a>
            </div>
          </div>
          <div className="mt-4 alian_img transition_time">
            <img className="alian_img_w" src={AlianImg} alt="AlianImg" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default GamePlay;
