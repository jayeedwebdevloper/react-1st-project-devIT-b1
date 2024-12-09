import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import "./Multislider.css"

const MultiItemsSlider = (props) => {
    const { sliderData } = props;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            }
        },

        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            }
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            }
        }
      ]
      };
    
    return (
        <div className=" w-full  px-[2%] mx-auto pb-5">
            <Slider {...settings}>
                {
         sliderData?.length > 0 && sliderData?.map((data, i) => (
            <div className="px-5 h-full slider-card" key={i} >
              <div className="bg-white shadow rounded-2xl p-7 h-full">
             <div className="w-[80px] h-[80px] flex rounded-md bg-blue-200/50 justify-center items-center slider-icon">
                   <img src={data?.icon} alt="" />         
                     </div>
                <h3 className="2xl:text-lg xl:text-md text-lg font-semibold text-blue-950 pt-7">{data?.title}</h3>
                     <p className="2xl:text-md  text-sm text-black/60 pt-5">{data?.content?.goal?.substring(1, 103)}....</p>
                     
                   <Link className="flex gap-2 items-center pt-5 text-blue-600 font-semibold slider-learn" to={`service/${data?.id}`}><FaArrowRight className="withHover" /> Learn More <FaArrowRight className="withoutHover" /></Link>
                 </div>
            </div>
                    ))
        }
      </Slider>
        </div>
    );
};

export default MultiItemsSlider;