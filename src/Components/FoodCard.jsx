import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
    console.log(food);
    return (
        <div className="w-[500px] h-[620px] rounded-md shadow-lg bg-gray-50 text-gray-800">
            <div className="flex space-x-4 items-center justify-around p-2">
                <img alt="" src={ food?.donor?.image } className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                <div className="flex flex-col space-y-1">
                    <p className='font-semibold'>Donated by: {food?.donor?.name }</p>
                </div>
                <div className="badge bg-secondary">{ food.status }</div>
            </div>
            <img src={food.foodImg} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{food.foodName}</h2>
                    <p className='font-semibold'>Quantity: {food?.foodQuantity} servings</p>
                    <p className='font-semibold'>Location: { food?.location }</p>
                    <p className='font-semibold'>Expiry Date: {format(new Date(food?.expiryDate), "P") }</p>
                </div>
                <Link to={`/food/${food._id}`}><button  type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-primary text-gray-50 btn hover:bg-primary hover:text-secondary">View Details</button></Link>
            </div>
        </div>
    );
};

export default FoodCard;