import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCalendarClearSharp, IoChatbox } from 'react-icons/io5';
import { MdBookmark } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

const BlogsDetails = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Blog Details"
    }, []);

    const location = useLocation();
    const pathName = location.pathname;
    const dataId = pathName.split("/blog-details/")[1];

    const [blogsData, setBlogsData] = React.useState();

    React.useEffect(() => {
        fetch("/blogsData.json")
            .then(res => res.json())
            .then(data => setBlogsData(data))
    }, []);


    const currentData = blogsData ? blogsData?.find(data => data.id == dataId) : null;
    console.log(currentData)


    return (
        <div className='w-full'>
            <div className='w-full pt-[100px] bg-[url("/assets/breadcrumb.png")] sm:pt-[150px] lg:pt-[230px] pb-[150px]'>
                <div className='text-center'>
                    <div>
                        <h1 className=" text-7xl lg:text-6xl text-white font-bold tracking-wide">{currentData?.title}</h1>
                    </div>
                    <div className='flex justify-center items-center pt-5 pb-5'>
                        <Link className='text-slate-300 tracking-wider' to={"/"}>Home</Link>
                        <IoIosArrowForward className='text-white size-5' />
                        <p className='text-white tracking-wider'>{currentData?.title}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-[1%] lg:px-24 py-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-3">
                    <div className='w-full md:col-span-2'>
                        <img className='w-full' src={currentData?.img} alt="" />

                        <div className="flex pt-5 gap-3 pb-5 border-b">
                            <div className='flex gap-2 items-center'>
                                <IoCalendarClearSharp className='size-4 text-blue-600' />
                                <p>{currentData?.date}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MdBookmark className='size-4 text-blue-600' />
                                <p>{currentData?.category}</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <IoChatbox className='size-4 text-blue-600' />
                                <p>{currentData?.comments?.length} Comments</p>
                            </div>
                        </div>

                        <div className="w-full">
                            {parse(`${currentData?.content}`)}
                        </div>

                        <div className="w-full flex items-center gap-2">
                            {
                                currentData?.tags?.map((tag, i) => (
                                    <button key={i} className='p-3 rounded-md bg-slate-100 text-blue-950 hover:bg-blue-700 hover:text-white'>{tag}</button>
                                ))
                            }
                        </div>
                        
                        <div className="w-full pt-12">
                            <h1 className='text-xl font-semibold'>Comments:</h1>

                            {
                                currentData?.comments?.map((comment, i) => (
                                    <div key={i}>
                                        <div className='flex gap-2 items-start'>
                                            <img className='w-24' src={comment?.userPhoto} alt="" />
                                            <div>
                                                <p>{comment?.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full md:col-span-1'></div>
                </div>
            </div>
        </div>
    );
};

export default BlogsDetails;