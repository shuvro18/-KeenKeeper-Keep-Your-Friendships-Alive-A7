import React from 'react';
import { NavLink } from 'react-router';
import logo from "../../assets/logo.png"
import { FaHome } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { GoGraph } from 'react-icons/go';

const NavBar = () => {
    return (
        <div className=' navbar bg-base-100 shadow-sm'>
            <div className=" w-11/12 mx-auto flex justify-between">
                <div>
                    <NavLink to={"/"}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to={"/"} className={({ isActive }) => `flex justify-between items-center mr-2 gap-1 btn ${isActive ? ("bg-[#244D3F] text-white") : "text-neutral/50"}`}>
                            <FaHome />
                            <p>Home</p>
                        </NavLink>
                        <NavLink to={"/timeline"} className={({ isActive }) => `flex justify-between items-center mr-2 gap-1 btn ${isActive ? ("bg-[#244D3F] text-white") : "text-neutral/50"}`}>
                            <IoMdTime />
                            <p>Timeline</p>
                        </NavLink>
                        <NavLink to={"/state"} className={({ isActive }) => `flex justify-between items-center mr-2 gap-1 btn ${isActive ? ("bg-[#244D3F] text-white") : "text-neutral/50"}`}>
                            <GoGraph />
                            <p>State</p>
                        </NavLink>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;