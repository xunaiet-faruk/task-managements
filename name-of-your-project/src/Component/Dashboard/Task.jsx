
import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { Authcontext } from "../../Authentication/Provider/Authprovider";
import Navbar from "../Navbar/Navbar";
import Fotter from "../Fotter/Fotter";
import { IoIosCreate } from "react-icons/io";
import { MdPreview } from "react-icons/md";


const Task = () => {
  
    const { user } = useContext(Authcontext)
    return (
      <div>
        <Navbar/>
        <div className="max-w-screen-xl mx-auto">

                <div className="flex">
                    <div className="w-64 min-h-screen bg-gray-200 pt-12">
                        <ul className="menu p-4 font-bold ">
                            <img src={user?.displayName} alt="" />
                            <li>
                                <NavLink to={'create'} className="hover:text-red-400" >
                                    <IoIosCreate /> Createe Task</NavLink>

                            </li>
                            <li>
                                <NavLink to='privious' className="hover:text-red-400">
                                   <MdPreview/> Privious Task</NavLink>

                            </li>
    

                          


                            {/* shared nav links */}

                            <div className="divider"></div>

                            <li>
                                <NavLink className="hover:text-red-400" to={'/'}>
                                    <FaHome></FaHome> Home</NavLink>

                            </li>

                        </ul>
                    </div>
                    <div className="flex-1 pt-20">
                        <Outlet></Outlet>
                    </div>
                </div>


        </div>
        <Fotter/>
      </div>
    );
};

export default Task;