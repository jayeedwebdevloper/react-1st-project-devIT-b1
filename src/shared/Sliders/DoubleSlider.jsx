import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Grid, Pagination } from 'swiper/modules';

import './doubleSlider.css'

const DoubleSlider = ({data}) => {
    return (

        <div className='w-full'>
                 <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
          }}
          
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
        modules={[Grid, Pagination]}
        className="doubleSlider"
      >
                {
                    data?.map((slide, i) => (
                        <SwiperSlide key={i}>
                            <div className='bg-white p-12 m-2 rounded-xl flex shadow'>
                          <img className='w-14 h-14' src="https://optechanimation1.netlify.app/assets/images/v1/quote.svg" alt="" />
                          
                      <div className='ps-5'>
                            <p className='text-lg text-slate-500 leading-8 tracking-wider'>{slide?.comment}</p>
                            
          <div className="py-3">
                   <div className="rating">
                    {
                       [...Array(Number(slide?.rating))].map((star, i) => (
                        <input key={i} type="radio" name="rating-1" className="mask mask-star bg-amber-400" />
                       ))      
                     }
                      </div>
                            </div>
                            <h3 className="text-xl text-blue-950 font-semibold">{slide?.name}</h3>
                            <p className="text-md text-slate-500 pt-1 font-bold tracking-wider">{slide?.designation }</p>
              </div>
          </div>
                </SwiperSlide>
                      
                    ))
       }
                
      </Swiper>

        </div>
    );
};

export default DoubleSlider;