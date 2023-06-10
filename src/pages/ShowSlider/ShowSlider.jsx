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
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] p-2">
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
              <div className="flex flex-col md:flex-row gap-[20px] my-[40px]">
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded  ">
                  SignUp Now
                </button>
                <button className="border-2 hover:bg-blue-700 text-[#192335] font-bold py-2 px-5 rounded  ">
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
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] p-2">
            <div>
              <h2 className="text-[28px] md:text-[52px] text-center md:text-left font-bold">
                Unlock Your <span className="text-[#2F57EF]">Linguistic</span>
                <br />
                <span className="text-[#B565E7]">Potential</span> With This
                <br />
                Platform.
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
              <div className="flex flex-col md:flex-row gap-[20px] my-[40px]">
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded  ">
                  SignUp Now
                </button>
                <button className="border-2 hover:bg-blue-700 text-[#192335] font-bold py-2 px-5 rounded  ">
                  Find Courses
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-full" src="https://translang.axiomthemes.com/wp-content/uploads/2017/03/img_promo2.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] p-2">
            <div>
              <h2 className="text-[28px] md:text-[52px] text-center md:text-left font-bold">
                Embark On A <span className="text-[#2F57EF]">Jouney </span>
                <br />
                To <span className="text-[#B565E7]">Master</span> Your
                <br />
                Favorite Language.
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
              <div className="flex flex-col md:flex-row gap-[20px] my-[40px]">
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded  ">
                  SignUp Now
                </button>
                <button className="border-2 hover:bg-blue-700 text-[#192335] font-bold py-2 px-5 rounded  ">
                  Find Courses
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-full max-h-[480px]" src="https://templatekit.jegtheme.com/verbalizer/wp-content/uploads/sites/117/2021/06/image-JA74V7F.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] p-2">
            <div>
              <h2 className="text-[28px] md:text-[52px] text-center md:text-left font-bold">
                Immerse <span className="text-[#2F57EF]">Yourself</span>
                <br />
                In The <span className="text-[#B565E7]">Beauty</span> 
                <br />
                of Languages.
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
              <div className="flex flex-col md:flex-row gap-[20px] my-[40px]">
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded  ">
                  SignUp Now
                </button>
                <button className="border-2 hover:bg-blue-700 text-[#192335] font-bold py-2 px-5 rounded  ">
                  Find Courses
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-full max-h-[480px]" src="https://bambino.bold-themes-cdn.com/demo-01/wp-content/uploads/sites/2/2022/04/image_hero_01.png" alt="" />
            </div>
          </div>
        </div>
        <div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] p-2">
            <div>
              <h2 className="text-[28px] md:text-[52px] text-center md:text-left font-bold">
                Expand Your <span className="text-[#2F57EF]">Linguistic</span>
                <br />
                <span className="text-[#B565E7]">Repertoire</span> Very 
                <br />
                Effortlessly.
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
              <div className="flex flex-col md:flex-row gap-[20px] my-[40px]">
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded  ">
                  SignUp Now
                </button>
                <button className="border-2 hover:bg-blue-700 text-[#192335] font-bold py-2 px-5 rounded  ">
                  Find Courses
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-full max-h-[480px]" src="https://bambino.bold-themes-cdn.com/demo-01/wp-content/uploads/sites/2/2022/04/inner_image_06.jpg" alt="" />
            </div>
          </div>
        </div>
        <div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-[30px] p-2">
            <div>
              <h2 className="text-[28px] md:text-[52px] text-center md:text-left font-bold">
                Learn With <span className="text-[#2F57EF]">Care</span>
                <br />
                <span className="text-[#B565E7]">Love</span> And
                <br />
                Passion.
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
              <div className="flex flex-col md:flex-row gap-[20px] my-[40px]">
                <button className="bg-gradient-to-r from-[#2f57ef] to-[#B260EC] hover:bg-blue-700 text-white font-bold py-2 px-5 rounded  ">
                  SignUp Now
                </button>
                <button className="border-2 hover:bg-blue-700 text-[#192335] font-bold py-2 px-5 rounded  ">
                  Find Courses
                </button>
              </div>
            </div>
            <div>
              <img className="max-w-full max-h-[480px] clip-image-one" src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/hero_image_04.jpg" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ShowSlider;
