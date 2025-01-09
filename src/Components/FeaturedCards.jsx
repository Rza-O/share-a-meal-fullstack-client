import React from "react";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const FeaturedCards = ({food}) => {
    const { foodName, foodImg, expiryDate, status, notes, _id, foodQuantity: quantity } = food;

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src={foodImg}
                alt="Donation Banner"
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {foodName}
                    </h2>
                    <p className="font-bold">Quantity: {quantity} serves</p>
                </div>
                <p className="mt-2 text-gray-600">
                    {notes.substring(0,60)}...
                </p>
                <div className="mt-4">
                    <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                        <span>
                            Status: <span className="text-green-600">{status}</span>
                        </span>
                        <span>
                            Expiry Date: <span className="text-red-600">{format(new Date(expiryDate), "P")}</span>
                        </span>
                    </div>
                </div>
                <Link to={`/food/${_id}`}>
                    <Button
                        className="w-full mt-4 bg-primary text-white hover:bg-gray-800"
                        size="lg"
                    >
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCards;