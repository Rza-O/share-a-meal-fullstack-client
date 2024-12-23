import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AvailableFoods from '../Pages/AvailableFoods';
import AddFood from '../Pages/AddFood';
import ManageMyFood from '../Pages/ManageMyFood';
import FoodRequests from '../Pages/FoodRequests';
import FoodDetails from '../Pages/FoodDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/available-foods',
                element: <AvailableFoods></AvailableFoods>
            },
            {
                path: '/add-food',
                element: <AddFood></AddFood>
            },
            {
                path: '/manage-foods',
                element: <ManageMyFood></ManageMyFood>
            },
            {
                path: '/my-requests',
                element: <FoodRequests></FoodRequests>
            },
            {
                path: '/food/:id',
                element: <FoodDetails></FoodDetails>
            }
        ]
    }
])

export default router;