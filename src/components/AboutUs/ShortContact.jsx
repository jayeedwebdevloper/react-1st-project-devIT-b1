import { IoMail, IoMailOutline } from "react-icons/io5";
import { TiLocation } from "react-icons/ti";
import { Link } from "react-router-dom";
import ContactForm from "../../shared/contact_form/ContactForm";


const ShortContact = () => {
    return (
        <div className="bg-stone-100 w-full py-12">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="flex gap-4">
                    <div className="w-full lg:w-1/2 ">
                        <h1 className="text-5xl  font-semibold text-blue-950">Let's build an awesome project together</h1>

                        <p className="text-[17px] text-slate-600 pt-7 pb-5 leading-[1.8]">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>

                        <div className="flex">
                            <div className="w-full sm:1/2">
                                <div className="bg-blue-950 rounded-md p-3 h-12 w-12 flex items-center justify-center ">
                                    <TiLocation className="size-7 text-white" />
                                </div>

                                <h5 className="text-900 font-semibold text-2xl py-3 text-blue-950">Address</h5>
                                <p className="text-slate-500">1791 Yorkshire Circle Kitty <br />
                                    Hawk, NC 279499</p>
                            </div>

                            <div className="w-full sm:1/2">
                                <div className="w-full sm:1/2">
                                    <div className="bg-blue-950 rounded-md flex items-center justify-center p-3 h-12 w-12">
                                        <IoMail
                                            className="size-7 text-white" />
                                    </div>

                                    <h5 className="text-900 font-semibold text-2xl py-3 text-blue-950">Contact</h5>
                                    <Link to="mailto:info@mthemeus.com" className="text-slate-500">info@mthemeus.com</Link>

                                    <Link to="tel:518-564-3200" className="text-slate-500 block">518-564-3200</Link>

                                </div>
                            </div>

                        </div>

                        <div className="h-px w-full bg-black/20 mt-7"></div>

                        <p className="pt-5 text-slate-500">Office Hours: Mon - Sat: 8:00 AM - 10:00 PM</p>
                    </div>

                    <div className="w-full lg:w-1/2 px-6">
                        <div className="bg-white p-7 rounded-xl ">
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ShortContact;