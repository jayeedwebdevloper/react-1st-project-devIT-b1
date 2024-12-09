import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import ContactForm from '../../../shared/contact_form/ContactForm';
import '../teamPage.css'

const TeamDetails = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const decodedPathName = pathName && decodeURIComponent(pathName);
    const userName = decodedPathName.split("/team-details/")[1]

    const [teamData, setTeamData] = React.useState();

    React.useEffect(() => {
        fetch("/teamsData.json")
            .then(res => res.json())
            .then(data => setTeamData(data))
    }, []);

    const teamDetails = teamData ? teamData?.find(data => data.name == userName) : {};

    return (
        <div className='w-full'>
            <div className='w-full pt-[100px] bg-[url("/assets/breadcrumb.png")] sm:pt-[150px] lg:pt-[230px] pb-[150px]'>
                <div className='text-center'>
                    <div>
                        <h1 className=" text-7xl lg:text-8xl text-white font-bold tracking-wide">{teamDetails?.name}</h1>
                    </div>
                    <div className='flex justify-center items-center pt-5 pb-5'>
                        <Link className='text-slate-300 tracking-wider' to={"/"}>Home</Link>
                        <IoIosArrowForward className='text-white size-5' />
                        <p className='text-white tracking-wider'>Team</p>
                        <IoIosArrowForward className='text-white size-5' />
                        <p className='text-white tracking-wider'>{userName}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="flex flex-col md:flex-row gap-5 justify-center py-24">
                    <div className="w-full md:w-1/2">
                        <img src={teamDetails?.photo} className='w-[90%] mx-auto rounded-3xl' alt="" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className='text-5xl font-semibold text-blue-900'>{teamDetails?.name}</h1>
                        <h3 className='text-2xl text-blue-700 font-semibold py-5'>{teamDetails?.designation}</h3>
                        <p>{
                            teamDetails?.description
                        }</p>

                        <div className="flex gap-2 items-center py-5">
                            <MdLocalPhone className='size-5' />
                            <Link to={`tel:${teamDetails?.phone}`}>{teamDetails?.phone}</Link>
                        </div>
                        <div className="flex gap-2 items-center pb-5">
                            <MdEmail className='size-5' />
                            <Link to={`mailto:${teamDetails?.email}`}>{teamDetails?.email}</Link>
                        </div>

                        {/* social */}
                        <div className="flex flex-row gap-3">
                            {
                                teamDetails?.social?.facebook && <Link className="bg-slate-200 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={teamDetails?.social?.facebook}>
                                    <FaFacebookF className="size-[20px] text-blue-950 social-icon" />
                                </Link>
                            }
                            {
                                teamDetails?.social?.linkedIn && <Link className="bg-slate-200 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={teamDetails?.social?.linkedIn}>
                                    <FaLinkedinIn className="size-[20px] text-blue-950 social-icon" />
                                </Link>
                            }
                            {
                                teamDetails?.social?.twitter && <Link className="bg-slate-200 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={teamDetails?.social?.twitter}>
                                    <FaTwitter className="size-[20px] text-blue-950 social-icon" />
                                </Link>
                            }
                            {
                                teamDetails?.social?.instagram && <Link className="bg-slate-200 hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={teamDetails?.social?.instagram}>
                                    <AiFillInstagram className="size-[20px] text-blue-950 social-icon" />
                                </Link>
                            }
                        </div>

                        <div className="w-full py-12 team-contact">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;