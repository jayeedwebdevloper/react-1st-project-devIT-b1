import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './teamPage.css'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const TeamPage = () => {
    const [teamsData, setTeamsData] = React.useState();
    React.useEffect(() => {
        fetch("/teamsData.json")
            .then(res => res.json())
            .then(data => setTeamsData(data))
    }, []);

    return (
        <div className='w-full'>
            <div className='w-full pt-[100px] bg-[url("/assets/breadcrumb.png")] sm:pt-[150px] lg:pt-[230px] pb-[150px]'>
                <div className='text-center'>
                    <div>
                        <h1 className=" text-7xl lg:text-8xl text-white font-bold tracking-wide">Our Teams</h1>
                    </div>
                    <div className='flex justify-center items-center pt-5 pb-5'>
                        <Link className='text-slate-300 tracking-wider' to={"/"}>Home</Link>
                        <IoIosArrowForward className='text-white size-5' />
                        <p className='text-white tracking-wider'>Our Teams</p>
                    </div>
                </div>
            </div>


            {/* data */}
            <div className="flex flex-wrap justify-center gap-5 py-[100px] bg-[#fdfdfd]">
                {
                    teamsData?.map((team, i) => (
                        <div key={i} className="w-full sm:w-[300px] bg-white overflow-hidden relative team-card border rounded-xl hover:shadow-lg hover:border-transparent transition-all duration-300">
                            <div className="w-full h-[300px] overflow-hidden">
                                <img className="w-full object-cover h-[300px] hover:scale-110  scale-100 transition-all duration-300" src={team?.photo} alt="" />
                            </div>


                            <div className="bg-white w-full py-5 px-3">
                                <Link to={`/team-details/${team?.name}`} className="text-xl text-blue-950 font-bold tracking-wide">{team?.name}</Link>
                                <p className="text-md pt-1+ font-bold text-slate-400">{team?.designation}</p>
                            </div>

                            <div className="social-icons flex flex-col gap-3 absolute top-4 left-4 transition-all duration-300">
                                {
                                    team?.social?.linkedIn && <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={team?.social?.linkedIn}>
                                        <FaLinkedinIn className="size-[20px] text-blue-950 social-icon" />
                                    </Link>
                                }
                                {
                                    team?.social?.twitter && <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={team?.social?.twitter}>
                                        <FaTwitter className="size-[20px] text-blue-950 social-icon" />
                                    </Link>
                                }
                                {
                                    team?.social?.instagram && <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={team?.social?.instagram}>
                                        <AiFillInstagram className="size-[20px] text-blue-950 social-icon" />
                                    </Link>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TeamPage;