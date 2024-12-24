import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import MangeFoodTableRow from '../Components/MangeFoodTableRow';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';

const ManageMyFood = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const fetchDataMatchingDonor = async () => {
    const { data } = await axiosSecure.get(`/my-foods?email=${user.email}`)
    console.log(data);
    return data
  }

  const { data: myFoods, isLoading } = useQuery({
    queryKey: ['myAllFoods'],
    queryFn: fetchDataMatchingDonor
  })

  if (isLoading) return <Loading></Loading>

  console.log(myFoods);
  console.log(user?.email);



  return (
    <div className='bg-harvesting bg-no-repeat bg-contain bg-center min-h-screen w-11/12 mx-auto'>
      <div className='text-center space-y-2 mt-5 mb-5'>
        <h1 className='font-lobster font-bold text-5xl'>Manage Food Donation</h1>
        <p className='text-sm font-semibold'>Easily track and manage the food items you’ve donated. Keep your contributions organized and make a difference!</p>
      </div>


      {/* Table Starts here */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-accent ">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                        Food Name
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                        Expiry Date
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                        Status
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                        Location
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 F">
                        Quantity
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 F">
                        Actions
                      </th>
                    </tr>
                  </thead>



                  <tbody className="bg-white divide-y divide-gray-200">


                      {myFoods.map(myFood=> <MangeFoodTableRow key={myFood._id} myFood={myFood}></MangeFoodTableRow>)}


                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="flex items-center justify-between mt-6">
          <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
              previous
            </span>
          </a>

          <div class="items-center hidden md:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md  bg-blue-100/60">1</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100">2</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100">3</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100">...</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100">12</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100">13</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md   hover:bg-gray-100">14</a>
          </div>

          <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
            <span>
              Next
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div> */}
      </section>
    </div>
  );
};

export default ManageMyFood;


{/* 
    this will give the red design i want 
  <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
  <div class="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    <h2 class="text-sm font-normal">Expired</h2>
  </div>
</td> */}