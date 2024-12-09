import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const PricingBanner = () => {
    return (
        <div  className='w-full pt-[100px] bg-[url("/public/assets/breadcrumb.png")] sm:pt-[150px] lg:pt-[230px] pb-[100px]'>
            <div className='text-center'>
                <div>
                    <h1 className=" text-7xl lg:text-8xl text-white font-bold tracking-wide">Pricing Plan</h1>
                </div>
                <div className='flex justify-center items-center pt-5'>
                    <Link className='text-slate-300 tracking-wider' to={"/"}>Home</Link>
                    <IoIosArrowForward className='text-white size-5'/>
                    <p className='text-white tracking-wider'>Pricing Plan</p>
                </div>
            </div>
        </div>
    );
};

export default PricingBanner;