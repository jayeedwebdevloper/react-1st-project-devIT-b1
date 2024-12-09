import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import TopHeader from './TopHeader';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { MdArrowDropDown } from 'react-icons/md';
import MobileMenu from './MobileMenu';


const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [searchOpen, setSearchOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(false);
    return (
        <header className='fixed z-[200] right-0 left-0 top-0 bg-transparent'>
            <div className={`container mx-auto px-[100px] ${isScroll && "hidden"}`}>
                <TopHeader />
            </div>

            <div className="w-full relative">

                <div className={`${isScroll ? "px-0" : "lg:px-[118px] px-[2%] lg:px-[68px]"}`}>

                    <nav className={`bg-white w-full py-4 px-2 lg:px-4 rounded-md shadow`}>
                        <div className="container mx-auto">

                            <div className="flex gap-12 items-center">

                                <div className="logo">
                                    <Link to={'/'} className='block w-[120px]'>
                                        <img className='w-full' src="/assets/logo-dark.svg" alt="" />
                                    </Link>
                                </div>

     <div className="main-menu hidden lg:block">
        <ul className='flex gap-5 text-black font-normal text-lg'>
           <li><NavLink to={'/'}>Home</NavLink></li>
            <li className=' dropdown relative cursor-pointer flex items-center'>Pages <MdArrowDropDown className='menu-arrow' />
   <ul className="dropdown-menu absolute z-[130] left-0 w-[200px] p-3 rounded-md drop-shadow-lg border bg-white">

                <li className='py-2'><NavLink to={"/about"}>About Us</NavLink></li>
                <li className='py-2'><NavLink to={"/services"}>Services</NavLink> </li>
                <li className='py-2'><NavLink to={"/pricing"}>Pricing</NavLink> </li>
                <li className='py-2'><NavLink to={"/team"}>Team</NavLink> </li>
                <li className='py-2'><NavLink to={"/shop"}>Shop</NavLink></li>

     </ul>
                    </li>
                 <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                 <li><NavLink to={'/blogs'}>Blogs</NavLink></li>
              <li><NavLink to={'/contact'}>Contact</NavLink></li>
                        </ul>
                                </div>

         <div className="get hidden sm:flex flex-1 justify-end items-center gap-4 justify-self-end">
                <div className="w-auto hidden md:block">
                     <button onClick={() => setSearchOpen(true)}><IoSearch className="size-6 text-black hover:text-[var(--primary)] transition-all duration-300" /></button>
                                    </div>


            <div className="w-auto">
                 <button className="btn btn-animation w-[170px] lg:w-[200px] text-lg bg-[var(--primary)] text-white border-0 outline-none hover:bg-[var(--primary)]">
                     <p className='animation-top w-[160px] lg:w-[200px]'>Get In Touch</p>
                    <p className='animation-bottom w-[160px] lg:w-[200px]'>Get In Touch</p>
                                        </button>
                                    </div>
                                </div>

             <div className="menu-bar-button block lg:hidden ms-auto w-fit">
             <button onClick={() => setIsMobile(true)}><HiOutlineBars3 className='size-8 text-black block lg:hidden' /></button>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>

                <div className={`absolute ${searchOpen ? "top-0" : "-top-[500px]"} transition-all duration-300 left-0 right-0 w-full py-12 px-14 bg-white z-[150]`}>

                    <button onClick={() => setSearchOpen(false)} className=' btn btn-circle border-none outline-none shadow-none bg-transparent hover:bg-transparent block ms-auto mb-10'><IoMdClose className='size-7 text-black' /></button>

                    <form className='w-full px-16'>
                        <div className="flex justify-between border-b">
                            <input className='bg-transparent border-none outline-none text-3xl  p-3' placeholder='Search here....' type="search" name="search" />

                            <button><IoSearch className="size-6 text-black hover:text-[var(--primary)] transition-all duration-300" /></button>
                        </div>
                    </form>
                    <p className='ps-16 text-lg pt-2'>Type above and press Enter to search.Press close to cancel</p>
                </div>
            </div>



            { /* MOBILE MENU */}
            <div className={`w-full absolute transition-all duration-300 ${isMobile ? "left-0 visible" : "-left-full invisible"} top-0 right-0 bg-black/45`}>
                <MobileMenu isMobile={isMobile} setIsMobile={setIsMobile} />
            </div>
        </header >
    );
};

export default Header;