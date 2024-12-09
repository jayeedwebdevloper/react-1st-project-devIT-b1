import Section2 from "../Home/ShortAbout/Section2/Section2";

const OurService = () => {
   
    return (
        <div className="bg-stone-100 py-24">
        <div className="container mx-auto px-[1%] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row justify-center items-center">
               
                <div className="w-full lg:w-1/2 px-5 pt-7 lg:pt-0 text-center lg:text-start ">
                    <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-semibold leading-[1.2] text-blue-950 pb-2 xl:pb-4">Providing IT solutions & services for startups</h1>
                    
                    <div>
                        <div>
                            <div className="flex justify-between gap-5 pb-7 pt-10">
                                <img className="bg-white rounded-md p-4" src="/assets/cup.svg" alt="" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-950 tracking-wide pb-3">Quality Solution for Business</h3>
                                        <p className=" text-slate-600 leading-[1.5rem] text-md tracking-wider " >Each demo built with Teba will look different. customize almost anything in the appearance of your</p>
                                    </div> 
                                </div>
                                
                                <div className="flex justify-between gap-5 pb-7">
                                <img className="bg-white rounded-md p-4" src="/assets/team.svg" alt="" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-950 tracking-wide pb-3">Amazing Expert Teams</h3>
                                        <p className=" text-slate-600 leading-[1.5rem] text-md tracking-wider " >Each demo built with Teba will look different. customize almost anything in the appearance of your</p>
                                    </div> 
                                </div>
                                
                                <div className="flex justify-between gap-5 pb-7">
                                <img className="bg-white rounded-md p-4" src="/assets/support.svg" alt="" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-blue-950 tracking-wide pb-3">Urgent Support For Clients</h3>
                                        <p className=" text-slate-600 leading-[1.5rem] text-md tracking-wider " >Each demo built with Teba will look different. customize almost anything in the appearance of your</p>
                                    </div> 
                            </div>
                        </div>
                      </div>
                
                </div>

                <div className="w-full lg:w-1/2 px-5">
                    <div style={
                        {
                            backgroundSize:"35%"
                        }
                    } className="px-3 bg-[url('/assets/shape1.svg')] bg-no-repeat bg-right-top">
                        <img className="w-10/12 xl:w-9/12" src="/assets/thumb3.png" alt="" />
                        <img className="xl:w-1/2 w-3/5 ms-autonn -mt-[150px] xl:-mt-[250px]" src="/assets/thumb4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default OurService;