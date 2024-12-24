import React from "react";
import { Button } from "./ui/button";

const FeaturedCards = () => {
    const status = "Active"; // Status of the donation campaign
    const expiryDate = "31st Dec 2024"; // Expiry date for the campaign

    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            <img
                src="https://via.placeholder.com/400x200" // Replace with actual image URL
                alt="Donation Banner"
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Give to End Hunger and Food Insecurity
                </h2>
                <p className="mt-2 text-gray-600">
                    Join us in our mission to combat hunger and food insecurity by
                    providing nutritious meals and essential groceries to families and
                    individuals in need.
                </p>
                <div className="mt-4">
                    <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                        <span>
                            Status: <span className="text-green-600">{status}</span>
                        </span>
                        <span>
                            Expiry Date: <span className="text-red-600">{expiryDate}</span>
                        </span>
                    </div>
                </div>
                <Button
                    className="w-full mt-4 bg-primary text-white hover:bg-gray-800"
                    size="lg"
                >
                    Donate Now
                </Button>
            </div>
        </div>
    );
};

export default FeaturedCards;