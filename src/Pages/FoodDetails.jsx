import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Loading from '../Components/Loading';
import { format } from 'date-fns';
import RequestModal from '../Components/RequestModal';
import useAuth from '../Hooks/useAuth';

const FoodDetails = () => {
    const {id} = useParams();
    const axiosSecure = useAxiosSecure();
    const [isModalOpen, setModalOpen] = useState(false);
    const queryClient = useQueryClient();
    const { user } = useAuth();

    const fetchSingleFood = async () => {
        const { data } = await axiosSecure.get(`/food/${id}`)
        return data;
    }

    const { data: food, isLoading } = useQuery({
        queryKey: ['food', id],
        queryFn: fetchSingleFood
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    const { foodName, foodImg, foodQuantity, location, notes, expiryDate, status, donor } = food;
    const donorEmail = donor?.email;
    const currentUser = user?.email;

    console.log(food);

    return (
        <div className='flex flex-col w-11/12 mx-auto mt-8 mb-8 p-10 border justify-center items-center'>
            <div>
                <img className='rounded-badge w-[1200px] lg:h-[600px]' src={ foodImg } alt="" />
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
                    <p className='w-4/5 text-left'>{notes}</p>
                    <p className='badge badge-outline badge-success'>{status}</p>
                    <p className='text-lg'><span className='font-semibold'>Donor name:</span> { donor?.name }</p>
                    <p className='text-lg'><span className='font-semibold'>Donor mail:</span> { donor?.email }</p>
                    <p className='text-lg' ><span className='font-semibold'>Pickup location:</span> {location}</p>
                    <p className='text-lg'><span className='font-semibold'>Expiry Date:</span> {format(new Date(expiryDate), "PP") }</p>
                    
                    {
                        currentUser == donorEmail ? <button className='btn btn-wide bg-secondary hover:bg-accent disabled'>Thank You for adding this food!</button> : food?.status === 'requested' ? <button className='btn btn-wide bg-gray-400 hover:bg-accent'>Requested</button> : <button onClick={() => setModalOpen(true)} className={'btn btn-wide bg-secondary hover:bg-accent'}>Request Food</button>
                    }
                    
                </div>
            </div>
            {isModalOpen && <RequestModal
                onSuccess={()=> queryClient.invalidateQueries(['food', id])}
                food={food}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}></RequestModal>}
        </div>
    );
};

export default FoodDetails;