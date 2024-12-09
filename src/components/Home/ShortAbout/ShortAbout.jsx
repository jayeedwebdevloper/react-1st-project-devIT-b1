import Section2 from "./Section2/Section2";

const ShortAbout = () => {
    const shortAboutHead = [
        {
            id: 1,
            title: "Highly Expert Team",
            content: "We provide the most responsive and functional IT design",
            icon:"/assets/team.svg"
        },

        {
            id: 2,
            title: "24/7 Customer Service",
            content: "We provide the most responsive and functional IT design",
            icon:"/assets/support.svg"
        },

        {
            id: 3,
            title: "Competitive Pricing",
            content: "We provide the most responsive and functional IT design",
            icon:"/assets/pricing.svg"
        }
    ]
    return (
        <div className="bg-stone-100 py-5 lg:py-[100px]">
            <div className="container mx-auto px-[1%] lg:px-[100px] ">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {
                        shortAboutHead?.map((data, i) => (
                            <div key={i} className="w-full lg:w-1/3">
                                <div className="flex items-center border-b-2 pt-5 lg:pt-0 pb-5 lg:pb-20">
                                    <div className="icon bg-blue-300/20 flex items-center justify-center rounded-lg w-[85px] h-[85px]">
                                        <img src={data.icon} alt="" />
                                    </div>
                                    <div className="content px-4 w-auto lg:w-[250px] 2xl:w-[300px]">
                                        <h3 className="text-lg font-semibold text-blue-950 tracking-wider">{data.title}</h3>
                                        <p className="text-black/60"> {data.content }</p>
                                    </div>
                                  </div>
                            </div>
                        ))
                    }
                </div>

                <Section2/>
            </div>
        </div>
    );
};

export default ShortAbout;