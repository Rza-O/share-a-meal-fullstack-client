import React from 'react';
import Banner from '../Components/Banner';
import StatsSection from '@/Components/StatsSection';
import FeaturedFoods from '@/Components/FeaturedFoods';
import { MarqueeReviews } from '@/Components/MarqueeRevies';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <FeaturedFoods></FeaturedFoods>
            <MarqueeReviews></MarqueeReviews>
        </div>
    );
};

export default Home;