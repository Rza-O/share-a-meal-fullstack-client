import React from 'react';
import Banner from '../Components/Banner';
import StatsSection from '@/Components/StatsSection';
import FeaturedFoods from '@/Components/FeaturedFoods';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <FeaturedFoods></FeaturedFoods>
        </div>
    );
};

export default Home;