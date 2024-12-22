import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { user, handleLogOut } = useAuth();
  console.log(user);
  const links = <>
    <li><NavLink className={({ isActive }) =>
      isActive ? "text-secondary focus:bg-none focus:text-secondary" : ""} to='/'>Home</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "text-secondary focus:bg-none focus:text-secondary" : ""} to='/available-foods'>Available Foods</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "text-secondary focus:bg-none focus:text-secondary" : ""} to='/add-food'>Add Foods</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "text-secondary focus:bg-none focus:text-secondary" : ""} to='/manage-foods'>Manage Foods</NavLink></li>
    <li><NavLink className={({ isActive }) =>
      isActive ? "text-secondary focus:bg-none focus:text-secondary" : ""} to='/my-requests'>My Requests</NavLink></li>
  </>

  const logOut = () => {
    handleLogOut()
      .then(res => toast.success('Logout Successful!'))
  }

  return (
    <div className="navbar bg-primary text-white lg:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Share<span className='text-secondary'>A</span>Meal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                title={user?.displayName}
                referrerPolicy='no-referrer'
                alt={user?.displayName}
                src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a onClick={logOut}>Logout</a></li>
          </ul>
          </div>
          : <div>
            <Link to='/login'><button className='btn btn-ghost'>Login</button></Link>
            <Link to='/register'><button className='btn bg-secondary border-none'>Register</button></Link>
          </div>}
        </div>
    </div>
      );
};

      export default Navbar;