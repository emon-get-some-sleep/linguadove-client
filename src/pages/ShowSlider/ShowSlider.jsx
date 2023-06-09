import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShowSlider.css";

const ShowSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-[100px]">
      <Slider {...settings}>
        {/* first slider  */}
        <div className="">
          <div className="flex flex-col-reverse md:flex-row items-center gap-[30px] p-2">
            <div>
              <h2 className="text-[28px] md:text-[52px] text-center md:text-left font-bold">
                Innovative <span className="text-[#2F57EF]">Language</span>
                <br />
                <span className="text-[#B565E7]">Academic</span> Platform for
                <br />
                Your Career.
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-[20px]">
                <div className="mt-[30px] flex relative gap-0">
                  <img
                    className="w-[60px] h-[60px] rounded-full border-4"
                    src="https://rainbowit.net/html/histudy/assets/images/testimonial/client-04.png"
                    alt=""
                  />
                  <img
                    className="w-[60px] h-[60px] rounded-full border-4 -ml-3"
                    src="https://rainbowit.net/html/histudy/assets/images/testimonial/client-05.png"
                    alt=""
                  />
                  <img
                    className="w-[60px] h-[60px] rounded-full border-4 -ml-3"
                    src="https://rainbowit.net/html/histudy/assets/images/testimonial/client-06.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-[#192335] font-semibold">
                    Join Over 3000+ Students
                  </h3>
                </div>
              </div>
              <div className="flex gap-[20px] my-[40px]">
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded hidden md:block">
                  SignUp Now
                </button>
                <button className="border-2 hover:bg-blue-700 text-[#192335] font-bold py-2 px-5 rounded hidden md:block">
                  Find Courses
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-full" src="https://rainbowit.net/html/histudy/assets/images/banner/language-club.png" alt="" />
            </div>
          </div>
          
        </div>
        <div>
          <h3>2</h3>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default ShowSlider;
