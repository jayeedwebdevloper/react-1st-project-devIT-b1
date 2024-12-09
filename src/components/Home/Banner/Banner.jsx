

const Banner = () => {
    return (
        <div className="w-full bg-[url('/assets/banner-bg.png')] bg-cover bg-center pt-[90px] lg:pt-[230px] pb-[100px]">
        <div className="container mx-auto px-3 md:px-[100px]">
            
            
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                <div className="w-full lg:w-1/2 text-center lg:text-start">
                    <h5 className="text-2xl text-white font-semibold">We provide professional IT services</h5>
                    <h1 className="2xl:text-[5rem] xl:text-6xl text-4xl font-bold text-white  py-3">Delivering tech solutions for your startups</h1>
                    <h4 className="text-2xl text-white">We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.</h4>
                
            <div className="flex gap-4 pt-5 justify-center lg:justify-start">
                        <button className="btn btn-animation w-[170px] py-7 lg:w-[200px] text-lg 
                 bg-[var(--primary)] text-white border-0 outline-none hover:bg-[var(--primary)]">
                    <p className='animation-top2 w-[160px] lg:w-[200px]'>Work With Us</p>
                    <p className='animation-bottom2 w-[160px] lg:w-[200px]'>Work With Us</p>
                        </button>
                        

         <button className="btn btn-animation w-[170px] py-7 lg:w-[200px] text-lg 
                bg-white text-black border-0 outline-none hover:bg-white">
                    <p className='animation-top2 w-[160px] lg:w-[200px]'>View Services</p>
                    <p className='animation-bottom2 w-[160px] lg:w-[200px]'>View Services</p>
                 </button>
                    </div>
                
                </div>
                <div className="w-full lg:w-1/2 px-4">
                    <img className="w-10/12 mx-auto" src="/assets/banner.png" alt="" />
                </div>
            </div>


        
        </div>
    </div>
    );
};

export default Banner;