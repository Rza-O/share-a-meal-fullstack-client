import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { handleGoogleLogin, handleRegister, setUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSocialLogin = () => {
        handleGoogleLogin()
            .then(res => {
                toast.success('Registration Successful!')
                navigate(location?.state ? location.state : '/')
            })
    }

    const formRegister = (data) => {
        const { username, email, password, photoURL } = data;
        handleRegister(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setUser(user);
                updateUserProfile({ displayName: username, photoURL: photoURL })
                toast.success('Registration Successful!')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }



    return (
        <div className="bg-looking min-h-screen flex justify-center items-center bg-no-repeat bg-cover pb-6 pt-5">
            <Helmet>
                <title>Register | Share-A-Meal</title>
            </Helmet>
            <div className="w-11/12 mx-auto max-w-md p-8 space-y-3 bg-accent text-primary">
                <h1 className="text-2xl font-bold text-center">Welcome to Share-A-Meal</h1>
                <p className='font-semibold text-center'>Please Register to use our website</p>
                <form onSubmit={handleSubmit(formRegister)} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block">Username</label>
                        <input {...register('username', { required: "username is required!" })} type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {errors.username && <p className='text-sm text-red-500'>{errors.username.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block">Email</label>
                        <input {...register('email', {required: "Email is required!"})} type="email" name="email" id="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="photoURL" className="block">Photo URL</label>
                        <input {...register('photoURL', { required: "PhotoURL is required!" })} type="url" name="photoURL" id="photoURL" placeholder="Email Address" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {errors.photoURL && <p className='text-sm text-red-500'>{errors.photoURL.message}</p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block">Password</label>
                        <input {...register('password', {
                            required: "Password is required!",
                            validate: {
                                hasUpperCase: (value) =>
                                    /[A-Z]/.test(value) || "Must include at least one uppercase letter",
                                hasLoweCase: (value) =>
                                    /[a-z]/.test(value) || "Must include at least one lowercase letter",
                                isLongEnough: (value) =>
                                    value.length >= 6 || "Must be at least 6 characters long",
                            }
                        })} type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
                        <div className="flex justify-end text-xs">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-black bg-secondary">Sign Up</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    <p className="px-3 text-sm">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleSocialLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6">Already have an account?
                    <Link to='/login'><button className='hover:underline'>Login</button></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;