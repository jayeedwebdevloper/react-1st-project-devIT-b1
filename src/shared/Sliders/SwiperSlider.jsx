import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const SwiperSlider = ({data}) => {

    return (
        <div className='w-full'>
           <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
          modules={[Pagination , Autoplay]}
          autoplay={{
            delay: 2300,
            disableOnInteraction: false,
          }}
          breakpoints={{
          
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        className="mySwiper pb-12 mb-5"
      >
          {
            data?.map((data, i) => (
              <SwiperSlide>
                 <div key={i} className="w-full border shadow hover:shadow-xl hover:border-none bg-white rounded-lg overflow-hidden relative team-card m-4">
               <div className='w-full overflow-hidden'>
                  <img className="w-full object-cover hover:scale-110  scale-100 transition-all duration-300" src={data?.photo} alt="" />
                                </div>


                                <div className="bg-white w-full py-5 px-3">
                                    <h4 className="text-xl text-blue-950 font-bold tracking-wide">{data?.name}</h4>
                                    <p className="text-md pt-1 text-slate-400">{ data?.designation}</p>
                                </div>
                                
                         <div className="social-icons flex flex-col gap-3 absolute top-4 left-4 transition-all duration-300">
                                    <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={`#`}>
                                    <FaLinkedinIn className="size-[20px] text-blue-950 social-icon" />
                                    </Link>

                                    <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={`#`}>
                                    <FaTwitter className="size-[20px] text-blue-950 social-icon" />
                                    </Link>


                                    <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={`#`}>
                                    <AiFillInstagram className="size-[20px] text-blue-950 social-icon" />
                                    </Link>
                                </div>
                     </div>
              </SwiperSlide>
            ))
       }
      </Swiper> 
        </div>
    );
};

export default SwiperSlider;