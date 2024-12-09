import React from 'react';
import { pricingData } from '../../util/pricingData';
import { IoMdCheckmark } from 'react-icons/io';

const PricingPlan = () => {
    return (
        <div className='bg-white py-[80px]'>
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="grid gap-3 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        pricingData?.map((pricing, i) => (
                            <div key={i} className={`${pricing?.classes?.bg} border p-5 w-full rounded-2xl`}>
                                <h4 className={`${pricing?.classes?.text} text-2xl font-semibold`}>{pricing?.title}</h4>
                                <p className={`${pricing?.classes?.seconText} py-4`}>{pricing?.subtitle}</p>

                                <h1 className='text-5xl'>
                                    <b className={`${pricing?.classes?.text}`}>${pricing?.price}</b>
                                    <sub className='text-lg text-slate-400'> / {pricing?.frequency }</sub>
                                </h1>

                             <ul className='py-3'>
                              {
                                 pricing?.features?.map((list, i) => (
                                  <li key={i} className={`${pricing?.classes?.text} p-2 flex gap-2`}><IoMdCheckmark className={`${pricing?.classes?.text} size-5`}/>{list}</li>
                                        ))
                              }
                                </ul>

                            <button className={`capitalize font-semibold hover:bg-blue-900 transition-all duration-300 hover:text-white w-full flex justify-center items-center py-4 rounded-md ${pricing?.classes?.bgBtn} text-blue-800`}>Select This Plan</button>
                                
                            </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PricingPlan;