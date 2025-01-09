import React, { useState } from 'react';
import contact from '../assets/Contact.svg'
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Contact = () => {

   const handleSubmit = (e) => {
      e.preventDefault();
      const first = e.target.firstName.value;
      const last = e.target.lastName.value
      toast.success(`${first} ${last}, Thank You for contacting us. We'll get back to you soon.`)
   };

   return (
      <div className="bg-gray-50 flex flex-col lg:flex-row items-center p-6 ">
         <Helmet>
            <title>Contact | Share-A-Meal</title>
         </Helmet>
         <div>
            <img src={contact} className='w-full md:min-h-[800px]' alt="" />
         </div>
         <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
               Get in Touch
            </h1>
            <p className="text-gray-600 text-center mb-6">
               Together, we reduce food waste and support the less fortunate.
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
               <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <select
                     name="category"
                     className="mt-1 block w-full input border-gray-300 rounded-md shadow-sm "
                  >
                     <option value="">Select category</option>
                     <option value="food-donation">Food Donation</option>
                     <option value="volunteer">Volunteer</option>
                     <option value="partnership">Partnership</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Meal Type</label>
                  <select
                     name="mealType"
                     className="mt-1 block input w-full border-gray-300 rounded-md shadow-sm "
                  >
                     <option value="">Select meal type</option>
                     <option value="perishable">Perishable</option>
                     <option value="non-perishable">Non-Perishable</option>
                  </select>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm font-medium text-gray-700">First Name</label>
                     <input
                        type="text"
                        name="firstName"
                        className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm "
                        placeholder="Enter your first name"
                        required
                     />
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700">Last Name</label>
                     <input
                        type="text"
                        name="lastName"
                        className="mt-1 block input w-full border-gray-300 rounded-md shadow-sm "
                        placeholder="Enter your last name"
                        required
                     />
                  </div>
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                     type="email"
                     name="email"
                     className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm "
                     placeholder="Enter your email address"
                     required
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                     type="tel"
                     name="phone"
                     className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm "
                     placeholder="Enter your phone number"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea
                     name="message"
                     className="textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                     placeholder="Enter your message"
                     rows="4"
                     required
                  />
               </div>
               <div className="flex items-center">
                  <input
                     type="checkbox"
                     name="subscribe"
                     className="h-4 w-4 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                     I would like to subscribe to updates from Share-a-Meal.
                  </label>
               </div>
               <div>
                  <button
                     type="submit"
                     className="w-full bg-primary text-white py-2 px-4 rounded-md hover:text-secondary"
                  >
                     Confirm
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Contact;
