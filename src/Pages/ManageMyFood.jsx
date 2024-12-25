import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from 'react-icons/md';
import MangeFoodTableRow from '../Components/MangeFoodTableRow';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';
import { Link } from 'react-router-dom';
import PulsatingButton from '@/Components/ui/pulsating-button';

const ManageMyFood = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const fetchDataMatchingDonor = async () => {
    const { data } = await axiosSecure.get(`/my-foods?email=${user.email}`)
    return data
  }

  const { data: myFoods, isLoading } = useQuery({
    queryKey: ['myAllFoods'],
    queryFn: fetchDataMatchingDonor,
    enabled: !loading
  })

  if (isLoading) return <Loading></Loading>

  console.log(myFoods);
  console.log(user?.email);



  return (
    <div className='bg-harvesting bg-no-repeat bg-contain bg-center min-h-screen w-11/12 mx-auto'>
      {
        myFoods.length < 1 ? <div className='p-14 flex flex-col justify-center items-center text-center gap-2 text-primary'>
          <h1 className='font-lobster text-5xl p-3 bg-accent'>You have not added any food yet!</h1>
          <p className='text-lg bg-accent p-1'>Add food for others to request food...</p>
          <Link to='/add-food'>
            <PulsatingButton className='bg-primary' pulseColor='#244034'>Add Food</PulsatingButton>
          </Link>
        </div>
          : <div>
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
                            <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">
                              Food Name
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">
                              Expiry Date
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">
                              Status
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">
                              Location
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 F">
                              Quantity
                            </th>
                            <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 F">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white/90 divide-y divide-gray-200">
                          {myFoods.map(myFood => <MangeFoodTableRow key={myFood._id} myFood={myFood}></MangeFoodTableRow>)}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
      }
    </div>
  );
};

export default ManageMyFood;
