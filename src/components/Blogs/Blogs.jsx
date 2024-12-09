import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Blogs() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Blogs"
    }, []);

    const [blogsData, setBlogsData] = React.useState();

    React.useEffect(() => {
        fetch("/blogsData.json")
            .then(res => res.json())
            .then(data => setBlogsData(data))
    }, []);

    const [currentData, setCurrentData] = React.useState(1);
    const dividedData = 2;

    const lastIndex = currentData * dividedData;
    const firstIndex = lastIndex - dividedData;

    const currentIndex = blogsData?.slice(firstIndex, lastIndex);

    return (
        <div className='w-full'>
            <div className='w-full pt-[100px] bg-[url("/assets/breadcrumb.png")] sm:pt-[150px] lg:pt-[230px] pb-[150px]'>
                <div className='text-center'>
                    <div>
                        <h1 className=" text-7xl lg:text-8xl text-white font-bold tracking-wide">Blogs</h1>
                    </div>
                    <div className='flex justify-center items-center pt-5 pb-5'>
                        <Link className='text-slate-300 tracking-wider' to={"/"}>Home</Link>
                        <IoIosArrowForward className='text-white size-5' />
                        <p className='text-white tracking-wider'>Blogs</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-[1%] lg:px-24 py-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-3">
                    <div className='w-full md:col-span-2'>
                        {
                            currentIndex && currentIndex?.map((blog, i) => (
                                <div key={i} className="rounded-lg overflow-hidden my-5 hover:shadow-lg border">
                                    <div className="w-full h-[400px] overflow-hidden">
                                        <img className='w-full h-full object-cover hover:scale-110 transition-all duration-300' src={blog?.img} alt="" />
                                    </div>
                                    <div className="w-full bg-white p-5">
                                        <div className="flex gap-2 items-center">
                                            <p>{blog?.category}</p>
                                            •
                                            <p>{blog?.date}</p>
                                        </div>
                                        <h2 className='py-3 text-4xl font-semibold text-blue-900'>{blog?.title}</h2>
                                        <p>Each demo built with Teba will look different. You can customize almost anything in appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

                                        <Link to={`/blog-details/${blog?.id}`} className='block py-3 text-blue-700'>Learn More →</Link>
                                    </div>
                                </div>
                            ))
                        }


                        <div className="py-12 flex items-center justify-start gap-2">
                            <button
                                onClick={() => setCurrentData(currentData - 1)}
                                disabled={currentData == 1}
                                className='bg-[#585b6f49] disabled:bg-[#e9e9e9] disabled:text-black p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dfe] text-black hover:text-white w-16 h-16'>
                                <IoIosArrowBack className='size-5' />
                            </button>

                            {
                                Array.from({ length: Math.ceil(blogsData?.length / dividedData) }, (_, number) => (
                                    <button key={number}
                                        onClick={() => setCurrentData(number + 1)}
                                        className={`p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dfe] text-black hover:text-white w-16 h-16 ${currentData == (number + 1) ? "bg-[#2b4dfe] text-white" : "bg-[#585b6f49]"}`}>
                                        {number + 1}
                                    </button>
                                ))
                            }

                            <button
                                onClick={() => setCurrentData(currentData + 1)}
                                disabled={currentData == Math.ceil(blogsData?.length / dividedData)}
                                className='bg-[#585b6f49] disabled:bg-[#e9e9e9] disabled:text-black p-5 rounded-lg transition-all duration-300 hover:bg-[#2b4dfe] text-black hover:text-white w-16 h-16'>
                                <IoIosArrowForward className='size-5' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:col-span-1'></div>
                </div>
            </div>
        </div>
    )
}
