import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";


const MobileMenu = (props) => {
    const {isMobile, setIsMobile} = props
    const [dropDownOpen, setDropDownOpen] =useState(false)
    return (
        <div className="w-full sm:w-[450px] mobile-menu-bar h-screen overflow-x-hidden overflow-y-scroll bg-white">
            <div className="w-full border">
                <button onClick={() => setIsMobile(false)} className=' outline-none p-3 shadow-none bg-transparent hover:bg-transparent block ms-auto border-s'><IoMdClose className='size-7 text-black' /></button>
            </div>

            <div className="menu">
                <ul className='text-black font-normal text-lg'>
                    <li className="w-full border-b py-2"><NavLink className="p-0" to={'/'}>Home</NavLink></li>
                    <li className='cursor-pointer border-b py-2 flex flex-row justify-between items-center' onClick={() => {
                        if (dropDownOpen) {
                            setDropDownOpen(false)
                        } else {
                            setDropDownOpen(true)
                        }
                    }}>Pages <MdArrowDropDown className=' size-5 p-0 text-black' />

                        <ul className={`w-full rounded-md p-3 ${dropDownOpen ? "block" : "hidden"}`}>

                            <li className='py-2 border-b'><NavLink className="p-0" to={"/about"}>About Us</NavLink></li>
                            <li className='py-2 border-b'><NavLink className="p-0" to={"/services"}>Services</NavLink> </li>
                            <li className='py-2 border-b'><NavLink className="p-0" to={"/pricing"}>Pricing</NavLink> </li>
                            <li className='py-2 border-b'><NavLink className="p-0" to={"/team"}>Team</NavLink> </li>
                            <li className='py-2 border-b'><NavLink className="p-0" to={"/shop"}>Shop</NavLink></li>

                        </ul>
                    </li>
                    <li className="w-full border-b py-2"><NavLink className="p-0" to={'/portfolio'}>Portfolio</NavLink></li>
                    <li className="w-full border-b py-2"><NavLink className="p-0" to={'/blogs'}>Blogs</NavLink></li>
                    <li className="w-full border-b py-2"><NavLink className="p-0" to={'/contact'}>Contact</NavLink></li>
                </ul>
            </div>

        </div>
    );
};

export default MobileMenu;