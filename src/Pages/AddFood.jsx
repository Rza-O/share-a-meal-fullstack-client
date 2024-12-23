import React, { useState } from 'react';
import foodDonation from '../assets/donatingFood.jpg';
import volunteer from '../assets/volunteer.jpg';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';

const AddFood = () => {
  const { user } = useAuth();
  const [expiryDate, setExpiryDate] = useState(new Date());
  const { register, handleSubmit } = useForm();

  const handleAddFood = async (data) => {
    // console.log({ ...data, expiryDate });
    // const { foodName, foodImg, foodQuantity, location, notes } = data;
    const formData = { ...data, expiryDate, foodStatus: 'available', donor: { name: user?.displayName, email: user?.email, image: user?.photoURL } }
    try {
      await 
    } catch (error) {
      
    }
  }

  return (
    <div className='bg-sprinkle min-h-svh flex items-center'>
      <div className='flex w-11/12 mx-auto'>
        <div className="bg-volunteer bg-cover bg-no-repeat w-1/2 h-[800px]">
          <div className='hero-overlay text-center h-full flex flex-col justify-center space-y-6 px-7'>
            <h1 className='text-5xl font-bold font-lobster text-secondary'>Be the Change, One Meal at a Time</h1>
            <p className='text-accent text-xl'>Add food items to our platform to bridge the gap between surplus and scarcity. Together, we can create a sustainable food-sharing community.</p>
          </div>
        </div>
        <div className="flex flex-col  w-1/2  p-6 rounded-md sm:p-10 bg-accent/80">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Every Meal Matters</h1>
            <p className="text-sm dark:text-gray-600">Got extra food? Don’t let it go to waste. Share the details below to ensure your surplus reaches those who need it most</p>
          </div>
          <form onClick={handleSubmit(handleAddFood)} className="space-y-12">
            <div className="space-y-4">
              {/* Food Name */}
              <div>
                <label htmlFor="foodName" className="block mb-2 text-sm">Food Name</label>
                <input {...register('foodName')} type="text" name="foodName" id="foodName" placeholder="Food Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* food image */}
              <div>
                <label htmlFor="foodImg" className="block mb-2 text-sm">Food Image</label>
                <input {...register('foodImg')} type="url" name="foodImg" id="foodImg" placeholder="Food Image" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* food quantity */}
              <div>
                <label htmlFor="foodQuantity" className="block mb-2 text-sm">Food Quantity</label>
                <input {...register('foodQuantity')} type="number" name="foodQuantity" id="foodQuantity" placeholder="Food Quantity" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* pickup location */}
              <div>
                <label htmlFor="location" className="block mb-2 text-sm">Pickup Location</label>
                <input {...register('location')} type="text" name="location" id="location" placeholder="Pickup Location" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* Expired Date */}
              <div className=''>
                <label htmlFor="expiryDate" className="mb-2 block text-black text-sm ">Expired Date</label>
                <DatePicker
                  className='border p-2 text-black rounded-md'
                  selected={expiryDate}
                  onChange={date => setExpiryDate(date)}
                />
                {/* <input type="text" name="location" id="location" placeholder="expired date" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" /> */}
              </div>
              <div>
                {/* additional notes */}
                <div className="flex justify-between mb-2">
                  <label htmlFor="notes" className="text-sm">Additional Notes</label>
                </div>
                <textarea {...register('notes')} name="notes" id="notes" placeholder="Additional notes" className="w-full px-3 py-2  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 textarea textarea-lg" />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-secondary text-black">Add Food</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;