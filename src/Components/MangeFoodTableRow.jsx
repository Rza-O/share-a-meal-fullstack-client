import { format } from 'date-fns';
import React from 'react';

const MangeFoodTableRow = ({ myFood }) => {
  const { foodName, expiryDate, status, location, foodQuantity: quantity } = myFood;
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <p>{foodName}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">{format(new Date(expiryDate), 'PP')}</td>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${status === 'available' ? 'text-emerald-500 bg-emerald-100/60' : 'text-yellow-500 bg-accent'} `}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h2 className="text-sm font-normal">{status}</h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
        {location}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">{quantity} servings</td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button className="text-gray-500 transition-colors duration-200  hover:text-primary focus:outline-none">
            Update
          </button>

          <button className="text-red-500 transition-colors duration-200 hover:text-primary focus:outline-none">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MangeFoodTableRow;