import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';
import RequestedFoodTableRow from '../Components/RequestedFoodTableRow';

const FoodRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const fetchRequestData = async () => {
    const { data } = await axiosSecure.get(`/my-foods?requestEmail=${user.email}`)
    console.log(data);
    return data;
  }

  const { data: myRequests, isLoading } = useQuery({
    queryKey: ['myRequests'],
    queryFn: fetchRequestData
  })

  if (isLoading) {
    return <Loading></Loading>
  }

  console.log(myRequests);

  return (
    <div className='bg-harvesting bg-no-repeat bg-contain bg-center min-h-screen w-11/12 mx-auto'>
      <div className='text-center space-y-2 mt-5 mb-5'>
        <h1 className='font-lobster font-bold text-5xl'>Track Your Requested Donations</h1>
        <p className='text-sm font-semibold'>Manage your requests seamlessly and ensure timely communication with the donors to help reduce food waste and make a difference in the community.</p>
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
                        Donor Name
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 ">
                        Pickup Location
                      </th>

                      <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 F">
                        Request Date
                      </th>
                      <th scope="col" className="px-4 py-3.5 text-sm font-bold text-left rtl:text-right text-gray-500 F">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/90 divide-y divide-gray-200">

                    {
                      myRequests.map(requestFood=> <RequestedFoodTableRow key={requestFood._id} myFood={requestFood}></RequestedFoodTableRow>)
                    }
                    {/* {myFoods.map(myFood => <MangeFoodTableRow key={myFood._id} myFood={myFood}></MangeFoodTableRow>)} */}

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

export default FoodRequests;