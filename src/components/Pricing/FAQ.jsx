import Accordion from "../../shared/Accordion/Accordion";
import { accordionData } from "../../util/accordionData";


const FAQ = () => {
    return (
        <div className="bg-stone-100 py-12 my-4">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="flex justify-center items-center gap-4 flex-col lg:flex-row">

                    <div className="w-full lg:w-1/2">
                        <h1 className="text-blue-900 font-bold text-5xl">Have any questions? <br /> here some answers</h1>

                        <p className="py-12 text-md leading-[1.4] text-slate-600">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only</p>

                        <div className="py-4">
                        <button className="btn btn-animation w-[170px] py-7 lg:w-[200px] text-lg 
                 bg-[var(--primary)] text-white border-0 outline-none hover:bg-[var(--primary)]">
                    <p className='animation-top2 w-[160px] lg:w-[200px]'>Ask Any Question</p>
                    <p className='animation-bottom2 w-[160px] lg:w-[200px]'>Ask Any Question</p>
                        </button>
                        </div>

                        </div>
                    
                    <div className="w-full lg:w-1/2">
                     <Accordion items={accordionData}/>

                       </div>
                    
                </div>
            </div>
        </div>
    );
};

export default FAQ;