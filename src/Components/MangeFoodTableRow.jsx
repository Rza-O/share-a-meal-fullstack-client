import { format } from 'date-fns';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import UpdateModal from './UpdateModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const MangeFoodTableRow = ({ myFood }) => {
  const { foodName, expiryDate, status, location, foodQuantity: quantity, _id } = myFood;
  const [isModalOpen, setModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  // delete mutation
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/food/${id}`)
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myAllFoods']);
      toast.success("Food has been deleted!")
    },
    onError: () => {
      toast.error('Failed to delete the food. Please try again!')
    }
  });

  const handleDelete = () => {
    toast((t) => (
      <span className='flex flex-col gap-2'>
        <p>Are you sure you want to delete the food?</p>
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
        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${status === 'available' ? 'text-emerald-500 bg-emerald-100/60' : 'text-yellow-500 bg-accent'} `}>
          {status === 'available' && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}

          <h2 className="text-sm font-normal">{status}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {location}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{quantity} servings</td>

      {/* button */}
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">

          {/* edit button */}
          <button onClick={() => setModalOpen(true)} className="text-gray-500 transition-colors duration-200  hover:text-secondary focus:outline-none">
            <FaEdit className='text-xl'></FaEdit>
          </button>

          {/* delete button */}
          <button onClick={handleDelete} className="text-red-500 transition-colors duration-200 hover:text-primary focus:outline-none">
            <MdDelete className='text-2xl'></MdDelete>
            
          </button>
          {isModalOpen && <UpdateModal
            food={myFood}
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}></UpdateModal>}

        </div>
      </td>
    </tr>
  );
};

export default MangeFoodTableRow;