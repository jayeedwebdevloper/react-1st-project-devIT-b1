import { useEffect } from "react";
import Teams from "../Teams/Teams";
import Banner from "./Banner/Banner";
import Reviews from "./Reviews/Reviews";
import ShortAbout from "./ShortAbout/ShortAbout";
import ShortPortfolio from "./ShortPortfolio/ShortPortfolio";
import ShortProjects from "./ShortProjects/ShortProjects";
import ShortServices from "./ShortServices/ShortServices";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <Banner />
            <ShortAbout />
            <ShortServices />
            <ShortPortfolio />
            <ShortProjects />
            <Teams />
            <Reviews/>
        </div>
    );
};

export default Home;