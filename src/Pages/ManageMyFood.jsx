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
                  <tbody className="bg-white/90 divide-y divide-gray-200">

                      {myFoods.map(myFood=> <MangeFoodTableRow key={myFood._id} myFood={myFood}></MangeFoodTableRow>)}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageMyFood;
