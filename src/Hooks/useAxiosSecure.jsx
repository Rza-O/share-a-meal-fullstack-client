import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// http://localhost:9000/
// https://share-a-meal-server.vercel.app/
const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000/',
    withCredentials: true,

});

const useAxiosSecure = () => {
    const { handleLogOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if (error.status === 401 || error.status === 403 ) {
                handleLogOut()
                    .then(() => {
                        console.log('unauthorized access');
                        navigate('/login')
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
            return Promise.reject(error);
        })
    }, []);

    return axiosInstance;
}
export default useAxiosSecure 
