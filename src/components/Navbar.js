import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"


const Navbar = () => {
    return (
    <nav className="flex items-center justify-between px-10 py-10 bg-white text-black text-xl">
        <div className='flex'>
            <div>
                <img src={Logo} height={40} width={40} alt="3007 Logo" /> 
            </div>
            <div>
                <a href="/" className="text-3xl font-bold">
                3007
                </a>
            </div>
        </div>
        <ul className="flex space-x-4">
            <li className="hover:text-gray-400">
                <Link to="/forCTOs">ForCTOs</Link>
            </li>
            <li className="hover:text-gray-400">
                <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-gray-400">
                <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-gray-400">
                <Link to="/howwework">How we work</Link>
            </li>
            <li className="hover:text-gray-400">
                <Link to="/aboutUs">About us</Link>
            </li>
            <li className="hover:text-gray-400">
                <Link to="/team">Team</Link>
            </li>
            <li className="hover:text-gray-400">
                <Link to="/careers">Careers</Link>
            </li>
            <li className="hover:text-gray-400 underline hover:underline-offset-4">
                <Link to="/letsTalk">Let's talk -</Link>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar;
