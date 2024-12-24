import { format } from 'date-fns';
import React from 'react';
import { MdCancelScheduleSend } from 'react-icons/md';

/**
 * 
 * Donar Name 
Pickup Location
Expire Date
Request Date 
 */


const RequestedFoodTableRow = ({ myFood }) => {
    const { foodName, expiryDate, status, location, foodQuantity: quantity, _id, donor, requester } = myFood;
    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <p className='font-bold'>{foodName}</p>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{format(new Date(expiryDate), 'PP')}</td>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                {/* <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${status === 'available' ? 'text-emerald-500 bg-emerald-100/60' : 'text-yellow-500 bg-accent'} `}>
                    {status === 'available' && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}

                </div> */}
                    <h2 className=" font-bold">{donor.name}</h2>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                {location}
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{format(new Date(requester.requestDate), 'PP')}</td>

            {/* button */}
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">

                    {/* edit button */}
                    {/* <button onClick={() => setModalOpen(true)} className="text-gray-500 transition-colors duration-200  hover:text-secondary focus:outline-none">
                        <FaEdit className='text-xl'></FaEdit>
                    </button> */}

                    {/* delete button */}
                    <button onClick={handleDelete} className="text-red-500 transition-colors duration-200 hover:text-primary focus:outline-none">
                        {/* <MdDelete className='text-2xl'></MdDelete> */}
                        <MdCancelScheduleSend className='text-2xl' />
                        
                    </button>
                    {/* {isModalOpen && <UpdateModal
                        food={myFood}
                        isModalOpen={isModalOpen}
                        setModalOpen={setModalOpen}></UpdateModal>} */}

                </div>
            </td>
        </tr>
    );
};

export default RequestedFoodTableRow;