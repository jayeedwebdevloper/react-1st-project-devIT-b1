import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

const ServiceDetails = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const pathId = pathName.split("/service-details/")[1]

    const [service, setService] = useState();

    useEffect(() => {
        fetch("/servicesData.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const serviceDetails = service ? service?.find(data => data.id == pathId) : {};

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Service Details"
    }, [pathId])
    return (
        <div className='w-full'>
            <div className='w-full pt-[100px] bg-[url("/assets/breadcrumb.png")] sm:pt-[150px] lg:pt-[230px] pb-[150px]'>
                <div className='text-center'>
                    <div>
                        <h1 className=" text-7xl lg:text-8xl text-white font-bold tracking-wide">{serviceDetails?.title}</h1>
                    </div>
                    <div className='flex justify-center items-center pt-5 pb-5'>
                        <Link className='text-slate-300 tracking-wider' to={"/"}>Home</Link>
                        <IoIosArrowForward className='text-white size-5' />
                        <p className='text-white tracking-wider'>Service</p>
                        <IoIosArrowForward className='text-white size-5' />
                        <p className='text-white tracking-wider'>{serviceDetails?.title}</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24">
                    <div className="w-full col-span-2">
                        <img className='w-full h-auto rounded-3xl' src={serviceDetails?.bg} alt="" />
                        <h3 className="pt-5 text-blue-900 text-xl font-semibold">Overview</h3>
                        <div>
                            {
                                parse(`${serviceDetails?.content}`)
                            }
                        </div>

                        <h3 className="pt-5 text-blue-900 text-xl font-semibold">Features</h3>
                        <div>
                            <p>{serviceDetails?.features?.content}</p>
                            <ul>
                                {
                                    serviceDetails?.features?.feature?.map((list, i) => (
                                        <li key={i} className='py-2 text-lg font-semibold text-blue-900'>✓ {list}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        <h3 className="pt-5 text-blue-900 text-xl font-semibold">Goal</h3>
                        <div>
                            <p>{serviceDetails?.goal}</p>

                        </div>
                    </div>

                    <div className="w-full col-span-1">
                        <div className="w-full">
                            {
                                service?.map((title, i) => (
                                    <Link className='block py-5 px-3 bg-slate-200 my-4 rounded-lg text-blue-900 font-semibold' key={i} to={`/service-details/${title?.id}`}>{title?.title}</Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;