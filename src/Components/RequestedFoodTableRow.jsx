import { useMutation, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { MdCancelScheduleSend } from 'react-icons/md';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';


const RequestedFoodTableRow = ({ myFood }) => {
    const { foodName, expiryDate, status, location, foodQuantity: quantity, _id, donor, requester } = myFood;
    const queryClient = useQueryClient();
    const axiosSecure = useAxiosSecure();

    const { mutate } = useMutation({
        mutationFn: async (id) => {
            const { data } = axiosSecure.patch(`/cancel-request/${id}`)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['myRequests']);
            queryClient.refetchQueries(['myRequests']);
            toast.success("Food has been cancelled!")
        },
        onError: () => {
            toast.error('Failed to cancel the food. Please try again!')
        }
    })

    const handleCancel = () => {
        toast((t) => (
            <span className='flex flex-col gap-2'>
                <p>Are you sure you want to cancel the food?</p>
                <div className='flex justify-end gap-2'>
                    <button
                        onClick={() => {
                            mutate(_id);
                            toast.dismiss(t.id);
                        }}
                        className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600'
                    >Yes</button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className='px-3 py-1 bg-gray-300 text-white rounded hover:bg-gray-400'
                    >Cancel</button>
                </div>
            </span>
        ),
            {
                duration: Infinity,
            })
    }




    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <p className='font-bold'>{foodName}</p>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{format(new Date(expiryDate), 'PP')}</td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                <h2 className=" font-bold">{donor.name}</h2>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {location}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{format(new Date(requester.requestDate), 'PP')}</td>

            {/* button */}
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    {/* delete button */}
                    <button onClick={handleCancel} className="text-red-500 transition-colors duration-200 hover:text-primary focus:outline-none">
                        <MdCancelScheduleSend className='text-2xl' />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default RequestedFoodTableRow;