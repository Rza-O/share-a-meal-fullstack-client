import React from 'react';
import foodDonation from '../assets/donatingFood.jpg';
import volunteer from '../assets/volunteer.jpg';

const AddFood = () => {
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
          <form noValidate="" action="" className="space-y-12">
            <div className="space-y-4">
              {/* Food Name */}
              <div>
                <label htmlFor="foodName" className="block mb-2 text-sm">Food Name</label>
                <input type="text" name="foodName" id="foodName" placeholder="Food Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* food image */}
              <div>
                <label htmlFor="foodImg" className="block mb-2 text-sm">Food Name</label>
                <input type="url" name="foodImg" id="foodImg" placeholder="Food Image" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* food quantity */}
              <div>
                <label htmlFor="foodQuantity" className="block mb-2 text-sm">Food Quantity</label>
                <input type="number" name="foodQuantity" id="foodQuantity" placeholder="Food Quantity" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* pickup location */}
              <div>
                <label htmlFor="location" className="block mb-2 text-sm">Pickup Location</label>
                <input type="text" name="location" id="location" placeholder="Pickup Location" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              {/* Expired Date */}
              <div>
                <label htmlFor="location" className="block mb-2 text-sm">Expired Date</label>
                <input type="text" name="location" id="location" placeholder="expired date" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
              <div>
                {/* additional notes */}
                <div className="flex justify-between mb-2">
                  <label htmlFor="notes" className="text-sm">Additional Notes</label>
                </div>
                <textarea name="notes" id="notes" placeholder="Additional notes" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-600">Don't have an account yet?
                <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Sign up</a>.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFood;