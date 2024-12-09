import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className='bg-stone-100 pt-[100px]'>
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="flex flex-wrap justify-between items-start gap-3 pb-[100px]">

                    <div className="w-full md:w-[48%] lg:w-[500px]">
                        <Link to="/" className='block'>
                           <img src="https://optechanimation1.netlify.app/assets/images/logo/logo-dark.svg" alt="" />
                        </Link>

                    <p className='pt-7 text-slate-600 leading-[2rem] text-lg tracking-wider pb-8'>Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few</p>

                        <div className="social-icons flex flex-row gap-3 transition-all duration-300">
                            
                        <Link className="bg-slate-300 hover:bg-blue-600 transition-all duration-300 rounded-md size-[40px] flex justify-center items-center" to={`#`}>
                       <RiFacebookFill  className="size-[20px] text-blue-950 social-icon" />
                                    </Link>

                        <Link className="bg-slate-300 hover:bg-blue-600 transition-all duration-300 rounded-md size-[40px] flex justify-center items-center" to={`#`}>
                     <FaLinkedinIn className="size-[20px] text-blue-950 social-icon" />
                                    </Link>

                     <Link className="bg-slate-300 hover:bg-blue-600 transition-all duration-300 rounded-md size-[40px] flex justify-center items-center" to={`#`}>
                     <FaTwitter className="size-[20px] text-blue-950 social-icon" />
                                    </Link>


                     <Link className="bg-slate-300 hover:bg-blue-600 transition-all duration-300 rounded-md size-[40px] flex justify-center items-center" to={`#`}>
                    <AiFillInstagram className="size-[20px] text-blue-950 social-icon" />
                                    </Link>
                                </div>
                    </div>

                    <div className="w-full md:w-[48%] lg:w-auto ">
                        <h4 className="text-blue-950 text-xl font-semibold">Quick Links</h4>
                        <ul className="flex flex-col gap-3 pt-5 text-lg text-slate-600 px-4">
                            <li className='cursor-pointer'>About</li>
                            <li className='cursor-pointer'>Our Team</li>
                            <li className='cursor-pointer'>Pricing</li>
                            <li className='cursor-pointer'>Blogs</li>
                            <li className='cursor-pointer'>Contact us</li>
                        </ul>
                    </div>


                    <div className="w-full md:w-[48%] lg:w-auto ">
                        <h4 className="text-blue-950 text-xl font-semibold">Services</h4>
                        <ul className="flex flex-col gap-3 pt-5 text-lg text-slate-600 px-4">
                            <li className='cursor-pointer'>UI/UX Design</li>
                            <li className='cursor-pointer'>App Development</li>
                            <li className='cursor-pointer'>Digital Marketing</li>
                            <li className='cursor-pointer'>Web Development</li>
                            <li className='cursor-pointer'>Cyber Security</li>
                        </ul>
                    </div>

                    <div className="w-full md:w-[48%] lg:w-auto ">
                        <h4 className="text-blue-950 text-xl font-semibold">Information</h4>
                        <ul className="flex flex-col gap-3 pt-5 text-lg text-slate-600 px-4">
                            <li className='cursor-pointer'>Working Process</li>
                            <li className='cursor-pointer'>Privacy Policy</li>
                            <li className='cursor-pointer'>Terms & Conditions</li>
                            <li className='cursor-pointer'>Faqs</li>
                            
                        </ul>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;