import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Teams.css';
import { AiFillInstagram } from "react-icons/ai";


const Teams = () => {
    const teamsData = [
        {
            id: 1,
            img: "https://optechanimation1.netlify.app/assets/images/team/team1.png",
            name: "Marvin McKinney",
            designation: "CEO & Founder",
            Linkedin: "#",
            twitter:  "#",
            instagram:"#"
            
        },
        
        {
            id: 2,
            img: "https://optechanimation1.netlify.app/assets/images/team/team2.png",
            name: "Sophia Rodriguez",
            designation: "Creative Director",
            Linkedin: "#",
            twitter:  "#",
            instagram:"#"
            
        },
        
        {
            id: 3,
            img: "https://optechanimation1.netlify.app/assets/images/team/team3.png",
            name: "Marvin McKinney",
            designation: "Lead Developer",
            Linkedin: "#",
            twitter:  "#",
            instagram:"#"
            
        },
        
        {
            id: 4,
            img: "https://optechanimation1.netlify.app/assets/images/team/team4.png",
            name: "Alexander Cameron",
            designation: "Product Designer",
            Linkedin: "#",
            twitter:  "#",
            instagram:"#"
            
       }
   ]

    return (
        <div className="bg-blue-950 py-[50px]">
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <h1 className="text-4xl md:text-5xl text-center pb-12 xl:w-1/2 mx-auto font-semibold text-white">Our expert team is always ready to help you</h1>

                <div className="flex flex-wrap justify-center gap-5">
                    {
                        teamsData?.map((team, i) => (
                            <div key={i} className="w-full sm:w-[300px] bg-white rounded-lg overflow-hidden relative team-card">
                                <img className="w-full object-cover h-[300px] hover:scale-110  scale-100 transition-all duration-300" src={team?.img} alt="" />


                                <div className="bg-white w-full py-5 px-3">
                                    <h4 className="text-xl text-blue-950 font-bold tracking-wide">{ team?.name}</h4>
                                    <p className="text-md pt-1+ font-bold text-slate-400">{ team?.designation}</p>
                                </div>
                                
                         <div className="social-icons flex flex-col gap-3 absolute top-4 left-4 transition-all duration-300">
                                    <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={`#`}>
                                    <FaLinkedinIn className="size-[20px] text-blue-950 social-icon" />
                                    </Link>

                                    <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={`#`}>
                                    <FaTwitter className="size-[20px] text-blue-950 social-icon" />
                                    </Link>


                                    <Link className="bg-white hover:bg-blue-600 transition-all duration-300 rounded-md size-[50px] flex justify-center items-center" to={`#`}>
                                    <AiFillInstagram className="size-[20px] text-blue-950 social-icon" />
                                    </Link>
                                </div>
                     </div>
                        ))
                    }
                </div>
              </div>
            </div>
    );
};

export default Teams;