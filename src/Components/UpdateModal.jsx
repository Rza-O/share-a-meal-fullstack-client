import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { format } from 'date-fns';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';

const UpdateModal = ({ isModalOpen, setModalOpen, food }) => {
    console.log(food);
    const { user } = useAuth();
    const queryClient = useQueryClient();
    const axiosSecure = useAxiosSecure()
    const [expiryDate, setExpiryDate] = useState(new Date(food.expiryDate));
    const { register, handleSubmit } = useForm();

    // useMutation to patch a data
    const { mutate } = useMutation({
        mutationFn: async (requestData) => {
            const { data } = await axiosSecure.patch(`/food/${food._id}`, requestData);
            return data
        },
        onSuccess: () => {
            toast.success('Food has been requested Successfully!')
            setModalOpen(false);
            queryClient.invalidateQueries(['myAllFoods'])
        },
        onError: (error) => {
            toast.error(`Request failed: ${error.message}`);
        }
    })

    const handleRequest = (data) => {
        const requestData = { ...data, expiryDate };
        mutate(requestData);
    }


    return (
        <div>
            <dialog id="my_modal_3" className={`modal ${isModalOpen ? 'modal-open' : ''}`}>
                <div className="modal-box">
                    <form method="dialog">
                        <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-2xl font-bold mb-4 text-center">Update Food Details</h2>
                    <form onSubmit={handleSubmit(handleRequest)}>
                        {/* Donar Email */}
                        <div className="mb-4">
                            <label className="block text-sm">Donor Email</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                value={user?.email}
                                readOnly
                            />
                        </div>
                        {/* food name */}
                        <div className="mb-4">
                            <label className="block text-sm">Food Name</label>
                            <input
                                {...register('foodName')}
                                type="text"
                                className="input input-bordered w-full"
                                defaultValue={food?.foodName}
                            />
                        </div>

                        {/* Food Image */}
                        <div className="mb-4">
                            <label className="block text-sm">Food Image</label>
                            <input
                                {...register('foodImg')}
                                type="url"
                                className="input input-bordered w-full"
                                defaultValue={food?.foodImg}
                            />
                        </div>

                        {/* quantity */}
                        <div className="mb-4">
                            <label className="block text-sm">Quantity(servings)</label>
                            <input
                                {...register('foodQuantity')}
                                type="text"
                                className="input input-bordered w-full"
                                defaultValue={food?.foodQuantity}
                            />
                        </div>

                        {/* food expiry date */}
                        <div className="mb-4">
                            <label className="block text-sm">Expiry Date</label>
                            <div className='mb-4 border p-2 text-black rounded-md'>
                                <DatePicker selected={expiryDate} onChange={(date) => setExpiryDate(date)} />
                            </div>
                        </div>
                        {/* food pickup location */}
                        <div className="mb-4">
                            <label className="block text-sm">Pickup Location</label>
                            <input
                                {...register('location')}
                                type="text"
                                className="input input-bordered w-full"
                                defaultValue={food?.location}
                            />
                        </div>

                        {/* Donor Notes */}
                        <div className="mb-4">
                            <label className="block text-sm">Additional Notes</label>
                            <textarea
                                {...register('notes')}
                                defaultValue={food.notes}
                                className="textarea textarea-bordered w-full"
                                placeholder="Add any additional notes..."
                            />
                        </div>

                        {/* Request Button */}
                        <div className="modal-action">
                            <button
                                type="submit"
                                className="btn bg-secondary text-primary hover:bg-accent"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateModal;