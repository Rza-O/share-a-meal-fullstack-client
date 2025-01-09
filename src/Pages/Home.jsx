import React from 'react';
import Banner from '../Components/Banner';
import StatsSection from '@/Components/StatsSection';
import FeaturedFoods from '@/Components/FeaturedFoods';
import { MarqueeReviews } from '@/Components/MarqueeRevies';
import ScrollReveal from '@/Components/ScrollReveal';
import Newsletter from '@/Components/Newsletter';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <ScrollReveal><FeaturedFoods></FeaturedFoods></ScrollReveal>
            <MarqueeReviews></MarqueeReviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;