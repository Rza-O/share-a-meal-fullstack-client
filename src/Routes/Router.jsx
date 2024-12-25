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
import PrivateRoute from '../Private/PrivateRoute';
import ErrorPage from '../Error/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/manage-foods',
                element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>
            },
            {
                path: '/my-requests',
                element: <PrivateRoute><FoodRequests></FoodRequests></PrivateRoute>
            },
            {
                path: '/food/:id',
                element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>
            }
        ]
    }
])

export default router;