import React from 'react';
import errorAnimation from '../assets/Animation - 1735122246726.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-center mt-5'>
                <Link to='/'><button className='btn bg-secondary text-black'>Back to homepage</button></Link>
            </div>
            <Lottie animationData={errorAnimation}></Lottie>
        </div>
    );
};

export default ErrorPage;