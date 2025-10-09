import React from 'react'
import NavImg from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
// 1. Import the GitHub icon from react-icons (Fa = Font Awesome)
import { FaGithub } from 'react-icons/fa' 


export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-30">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                
                {/* Logo and Name (Left Side) - Corrected from previous step */}
                <NavLink to="/" className="flex items-center gap-2">
                    <img src={NavImg} alt="Hero.IO Logo" className="h-8 w-auto" />
                    <span className="font-semibold text-lg text-purple-800">Hero.IO</span>
                </NavLink>

                {/* Navigation (Center) - Centering logic added in previous step */}
                <div className="flex items-center flex-grow justify-center">
                    <nav className="hidden md:flex gap-6">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Home</NavLink>
                        <NavLink to="/apps" className={({ isActive }) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Apps</NavLink>
                        <NavLink to="/installation" className={({ isActive }) => isActive ? 'text-indigo-600 font-medium' : 'text-gray-600'}>Installation</NavLink>
                    </nav>
                </div>

                {/* Contribution Button (Right Side) */}
                <div className="flex items-center gap-3">
                    {/* 2. Added flex and items-center to align the icon and text */}
                    <a 
                        className="btn bg-indigo-600 text-white px-3 py-1 rounded flex items-center gap-2" 
                        href="https://github.com/" 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        {/* 3. Added the GitHub icon with size styling */}
                        <FaGithub className="w-5 h-5" /> 
                        Contribution
                    </a>
                </div>
            </div>
        </header>
    )
}