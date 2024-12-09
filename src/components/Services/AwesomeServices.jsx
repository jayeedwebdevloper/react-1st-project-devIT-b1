import React, { useEffect, useState } from 'react';
import './services.css'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const AwesomeServices = () => {
    const [servicesData, setServicesData] = useState();

    useEffect(() => {
        fetch("/servicesData.json")
            .then(res => res.json())
            .then(data => setServicesData(data))
    }, []);

    return (
        <div className='w-full py-12'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    servicesData?.map((data, i) => (
                        <div key={i} className='w-full flex gap-5 items-stretch bg-white px-8 py-8 rounded-lg'>
                            <div className="w-20 h-20 rounded-lg bg-[#eef1ff] flex justify-center items-center hover:bg-[#2b4dff] icon-box-service flex-shrink-0">
                                <img src={data?.icon} />
                            </div>
                            <div className="w-auto flex-grow">
                                <h1 className='text-xl font-semibold text-blue-900 pb-1'>{data?.title}</h1>
                                <p className='pb-3'>{data?.desc}</p>
                                <Link className='flex gap-3 items-center font-bold text-blue-500' to={`/service-details/${data?.id}`}>Learn More <FaArrowRight className='size-5' /></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AwesomeServices;