import React from "react";
import ImgAlian from "../assets/img/png/img_1_alian.png";
const MySlider = () => {
  return (
    <>
      <section className="bg_clr_slider  py-5 ">
       
        <div class="marquee marquee--reverse pt-5 overflow-hidden">
          <div class="marquee__group">
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
          </div>
        </div>
        
        <div class="marquee overflow-hidden pb-5">
          <div class="marquee__group">
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
            <img className="img_alian_slider " src={ImgAlian} alt="ImgAlian" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MySlider;
