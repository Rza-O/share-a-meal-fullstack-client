import React, { useRef, useState } from 'react';
import FoodCard from '../Components/FoodCard';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Loading';
import { LuLayoutGrid } from "react-icons/lu";
import { FaSearch } from 'react-icons/fa';

const AvailableFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState(null);
  const searchRef = useRef();
  const [toggleGrid, setToggleGrid] = useState(false);


  const fetchFoods = async () => {
    const params = {
      search, 
      sort: sortOrder
    }
    const { data } = await axiosSecure.get('/all-foods', {params});
    return data;
  }


  const { data: foods, isLoading, error } = useQuery({
    queryKey: ['allFoods', search, sortOrder],
    queryFn: fetchFoods,
  })
  if (isLoading) {
    return <Loading></Loading>
  }

  const handleSearch = (e) => {
    e.preventDefault;
    setSearch(searchRef.current.value);
  }

  const handleSortToggle = () => {
    setSortOrder((prev)=> prev === 'desc' ? 'asc' : 'desc')
  }

  const handleReset = () => {
    setSearch('');
    setToggleGrid(false);
    setSortOrder(null)
  }


  return (
    <div className='bg-accent'>
      <div className=' space-y-12 pt-5 bg-center w-11/12 mx-auto min-h-screen'>
        <div className='text-center space-y-4'>

          <h2 className='font-lobster text-5xl font-bold text-primary'>Available Foods for Donation</h2>
          <p>Explore surplus food items ready to be shared with those in need. Together, we can make a difference by redistributing resources.</p>
          <div>
            <div>
              <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                <form onSubmit={handleSearch}>
                  <div className='flex relative p-1 overflow-hidden border rounded-lg items-center  focus-within:ring focus-within:ring-opacity-40 focus-within:border-secondary focus-within:ring-secondary'>
                    <input
                      className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                      type='text'
                      name='search'
                      defaultValue={search}
                      ref={searchRef}
                      placeholder='Enter Food Title'
                      aria-label='Enter Food Title'
                    />
                    {/* <div className='absolute right-4'><FaSearch className='text-primary' /></div> */}
                    <button type='submit' className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary rounded-md hover:text-secondary focus:bg-gray-600 focus:outline-none'>
                      Search
                    </button>
                  </div>
                </form>
                <div className='flex gap-2'>
                  <div>
                    <button onClick={handleSortToggle} className='btn rounded-md bg-primary text-white hover:text-secondary hover:bg-primary'>Sort By Expiry Date</button>
                  </div>
                  <div>
                    <button onClick={()=> setToggleGrid(!toggleGrid)} className='btn text-xl bg-primary text-white hover:text-secondary hover:bg-primary'>
                      <LuLayoutGrid />
                    </button>
                  </div>
                  <button onClick={handleReset} className='btn bg-primary text-white hover:text-secondary hover:bg-primary'>Reset</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ${toggleGrid && 'lg:grid-cols-2'} gap-5 place-items-center`}>
          {
            foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;