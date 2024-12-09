import React, { useEffect } from 'react';
import AboutBanner from './AboutBanner';
import MoreAbout from './MoreAbout';
import OurService from './OurService';
import Counter from './Counter';
import SwiperSlider from '../../shared/Sliders/SwiperSlider';
import { teamData } from '../../util/teamData';
import ShortContact from './ShortContact';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <AboutBanner />
            <MoreAbout />
            <OurService />
            <Counter />
            <SwiperSlider data={teamData} />
            <ShortContact/>
        </div>
    );
};

export default About;