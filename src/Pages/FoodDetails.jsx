import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';
import { format } from 'date-fns';

const FoodDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();

    const fetchSingleFood = async () => {
        const { data } = await axiosSecure.get(`/food/${id}`)
        return data;
    }

    const { data: food, isLoading } = useQuery({
        queryKey: ['food'],
        queryFn: fetchSingleFood
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const { foodName, foodImg, foodQuantity, location, notes, expiryDate, status, donor } = food;

    console.log(food);

    return (
        <div className='flex w-11/12 mx-auto mt-8 p-10 border'>
            <div>
                <img className='rounded-badge ' src={ foodImg } alt="" />
            </div>
            <div className=''>
                <div className='flex justify-center mb-5'>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-secondary w-16 rounded-full ring ring-offset-2">
                            <img src={ donor?.image } />
                        </div>
                    </div>
                    {/* <p>Donor: {donor?.name} , { donor?.email }</p> */}
                </div>
                <div className='space-y-5 flex flex-col justify-around items-center text-center'>
                    <h1 className='text-5xl font-bold'>{foodName}</h1>
                    <h3 className='text-3xl font-bold'>{foodQuantity} / Servings</h3>
                    <p className='badge badge-outline border-primary'>{status}</p>
                    <p className='text-lg'>Donor name: { donor?.name }</p>
                    <p className='text-lg'>Donor mail: { donor?.email }</p>
                    <p className='text-lg' >Pickup location: {location}</p>
                    <p className='text-lg'>Expiry Date: {format(new Date(expiryDate), "PP") }</p>
                    <p className='w-3/4'>Notes: {notes}</p>
                    <button className='btn btn-wide bg-secondary hover:bg-accent'>Request Food</button>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;