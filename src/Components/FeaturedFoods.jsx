import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from './Loading';
import FeaturedCards from './FeaturedCards';
import PulsatingButton from './ui/pulsating-button';
import { Link } from 'react-router-dom';

const FeaturedFoods = () => {
    const axiosSecure = useAxiosSecure();
    const fetchFeaturedData = async () => {
        const { data } = await axiosSecure.get('/featured');
        return data;
    }
    const { data: featured, isLoading } = useQuery({
        queryKey: ['featured'],
        queryFn: fetchFeaturedData
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const featuredSixCard = featured.slice(0, 6);

    return (
        <div className='w-11/12 mx-auto flex flex-col items-center justify-center'>
            <h2 className="font-lobster text-5xl text-green-800 font-bold text-center my-6">Featured Foods</h2>
            <div className='2xl:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6'>
                {
                    featuredSixCard.map(food=> <FeaturedCards key={food._id} food={food}></FeaturedCards>)
                }
            </div>
            <div className='hidden 2xl:grid 2xl:grid-cols-4 gap-6'>
                {
                    featured.map(food=> <FeaturedCards key={food._id} food={food}></FeaturedCards>)
                }
            </div>
            <Link to='/available-foods'>
                <PulsatingButton pulseColor='#213a2f' className='mt-5 bg-primary'>View All Foods</PulsatingButton>
            </Link>
        </div>
    );
};

export default FeaturedFoods;