import React from 'react';
import Banner from '../Components/Banner';
import StatsSection from '@/Components/StatsSection';
import FeaturedFoods from '@/Components/FeaturedFoods';
import { MarqueeReviews } from '@/Components/MarqueeRevies';
import ScrollReveal from '@/Components/ScrollReveal';
import Newsletter from '@/Components/Newsletter';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Share-A-Meal</title>
            </Helmet>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <ScrollReveal><FeaturedFoods></FeaturedFoods></ScrollReveal>
            <MarqueeReviews></MarqueeReviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;