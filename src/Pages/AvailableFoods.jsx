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
    console.log(foods);
    return (
        <div className='bg-harvesting bg-no-repeat  bg-center w-11/12 mx-auto h-screen'>
            <div>
                <h2></h2>
            </div>
            <FoodCard></FoodCard>
        </div>
    );
};

export default AvailableFoods;