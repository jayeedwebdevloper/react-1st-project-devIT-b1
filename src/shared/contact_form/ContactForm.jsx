import React from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactForm = () => {

    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8zn353w', 'template_65uzkrk', form.current, {
                publicKey: 'mwvCFjCdtJG5577D7',
            })
            .then(
                () => {
                    toast.success("We Received your message, Thank you!");
                    e.target.reset();
                },
                (error) => {
                    toast.error("We can't send this message right now");
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="w-full">
            <h4 className="text-blue-950 text-3xl font-semibold pb-5 ">Fill The Contact Form</h4>
            <p className="text-slate-600 text-lg">Feel free to contact with us, we don't spam your email</p>

            <div className="flex ">
                <div className="w-full md:w-1/2 py-2 px-3">
                    <input name='user_name' type="text" className="bg-transparent border-stone-400/20 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50" placeholder="Your Name" />
                </div>

                <div className="w-full md:w-1/2 py-2">
                    <input name='phone' type="number" className="bg-transparent border-stone-400/20 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50" placeholder="Phone Number" />
                </div>
            </div>

            <div className="py-2 px-3">
                <input name='email' type="email" className="bg-transparent border-stone-400/20 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50" placeholder="Email" />
            </div>

            <div className="py-2 px-3">
                <textarea name='message' className="bg-transparent border-stone-400/20 rounded-none outline-none border-b-2 w-full px-2 py-3 focus:border-blue-600/50 h-[150px]" placeholder="Write Massage" />
            </div>

            <div className="py-4">
                <button type='submit' className="btn btn-animation w-full py-7  text-lg 
                         bg-[var(--primary)] text-white border-0 outline-none hover:bg-[var(--primary)]">
                    <p className='animation-top2 w-full'>Send Massage</p>
                    <p className='animation-bottom2 w-full'>Send Massage</p>
                </button>
            </div>
        </form>
    );
};

export default ContactForm;