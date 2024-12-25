import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from './Loading';
import FeaturedCards from './FeaturedCards';

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
    return (
        <div className='w-11/12 mx-auto flex flex-col items-center justify-center'>
            <h2 className="font-lobster text-5xl text-green-800 font-bold text-center my-6">Featured Foods</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    featured.map(food=> <FeaturedCards key={food._id} food={food}></FeaturedCards>)
                }
            </div>
        </div>
    );
};

export default FeaturedFoods;