import React from 'react';
import FoodCard from '../Components/FoodCard';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';

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
        return <Loading></Loading>
    }
    console.log(foods);
    return (
        <div className='bg-accent'>
            <div className=' space-y-12 pt-5 bg-center w-11/12 mx-auto min-h-screen'>
                <div className='text-center space-y-4'>
                    
                    <h2 className='font-lobster text-5xl font-bold text-primary'>Available Foods for Donation</h2>
                    <p>Explore surplus food items ready to be shared with those in need. Together, we can make a difference by redistributing resources.</p>
                    <div>
                        <div>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                                <form>
                                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-secondary focus-within:ring-secondary'>
                                        <input
                                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                            type='text'
                                            name='search'
                                            placeholder='Enter Food Title'
                                            aria-label='Enter Food Title'
                                        />

                                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary rounded-md hover:bg-secondary focus:bg-accent focus:outline-none'>
                                            Search
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <button className='btn rounded-md'>Sort By Expiry Date</button>
                                </div>
                                <button className='btn'>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5 place-items-center'>
                    {
                        foods.map(food=> <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;