import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links =<>
    
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "hover:text-black font-bold hover:bg-yellow-300" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/task"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "hover:text-black font-bold hover:bg-yellow-300" : ""
            }
        >
            Task
        </NavLink></li>
        <li><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "hover:text-black font-bold hover:bg-yellow-300" : ""
            }
        >
          Login
        </NavLink></li>

    </>
    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className="navbar bg-yellow-50 shadow-xl">
                <img className='w-20' src={"https://i.ibb.co/v3NWXZc/image.png"} alt="" />
                <div className="navbar-start">
                    <div className="dropdown navbar-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
              
            </div>
        </div>
    );
};

export default Navbar;