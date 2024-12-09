const Counter = () => {
    const counterData = [
        {
            id: 1,
            title: 'Happy Clients',
            total: '1800+',
            icon:'/assets/like.svg'
        },

        {
            id: 2,
            title: 'Finished Projects',
            total: '600+',
            icon:'/assets/job.svg'
        },

        {
            id: 3,
            title: 'Skilled Experts',
            total: '200+',
            icon:'/assets/people.svg'
        },

        {
            id: 4,
            title: 'Clients Satisfaction',
            total: '26%',
            icon:'/assets/cup.svg'
        }
    ]
    return (
        <div className="bg-[#fff]">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="py-24">
                    <div className="flex flex-wrap justify-center items-center">

                    {
                        counterData?.map((counter,i) =>(
                            <div key={i} className="lg:w-1/4 py-3 sm:1/2 w-full px-3 xl:px-8 flex items-center justify-center max-sm:justify-start gap-3">
                                <div className="p-4 bg-blue-200/50 rounded-lg">
                                <img src={counter?.icon} className="w-10 xl:w-10 h-10" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-blue-950 max-sm:text-4xl text-xl xl:text-5xl font-semibold">{counter?.total}</h1>
                                    <p className="pt-2 text-md text-black/40 capitalize">{counter?.title}</p>
                                </div>
                            </div>
                        ))  
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;