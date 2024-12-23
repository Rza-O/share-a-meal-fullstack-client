import React from 'react';
import FoodCard from '../Components/FoodCard';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AvailableFoods = () => {
    const axiosSecure = useAxiosSecure();
    const fetchFoods = async () => {
        const { data } = await axiosSecure.get('/all-foods');
        return data;
    }
    const { data: foods, isLoading, error } = useQuery({
        queryKey: ['allFoods'],
        queryFn: fetchFoods,
    })
    if (isLoading) {
        return <div>Loading</div>
    }
    console.log(foods);
    return (
        <div className='bg-harvesting bg-no-repeat border space-y-12 border-red-500 pt-5 bg-center w-11/12 mx-auto min-h-screen'>
            <div className='text-center space-y-4'>
                <h2 className='font-lobster text-5xl font-bold text-primary'>Available Foods for Donation</h2>
                <p>Explore surplus food items ready to be shared with those in need. Together, we can make a difference by redistributing resources.</p>
            </div>
            <div className='grid grid-cols-3 2xl:grid-cols-4 place-items-center'>
                {
                    foods.map(food=> <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;