'use client'

import React, { useState } from 'react'
import User from "@/app/images/me.jpg"
import { FaRegEnvelope } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import Image from 'next/image'


export default function Navbar() {

    // State to handle dropdown open/close
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="bg-transparent">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">

                    <div className="ml-auto flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="icons flex mx-3">
                            <div className="icon ml-3">
                                <FaRegEnvelope />
                            </div>
                            <div className="icon ml-3">
                                <GoBell />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
                            id="user-menu-button"
                            aria-expanded={isDropdownOpen ? 'true' : 'false'}
                            onClick={toggleDropdown} // Toggle dropdown on button click
                        >
                            <span className="sr-only">Open user menu</span>

                            <Image
                                src={User}
                                width={30}  // Smaller icon on mobile
                                height={10}
                                alt="Pic of User"
                                className='rounded-full'
                            />
                        </button>

                        {/* Dropdown menu */}
                        {isDropdownOpen && (
                            <div
                                className="absolute top-12 right-0 z-50 my-4 text-base list-none bg-slate-700 divide-y divide-gray-900 rounded-lg shadow"
                                id="user-dropdown"
                            >
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-white">Hadi Zaidi</span>
                                    <span className="block text-sm text-slate-200 truncate ">
                                        hadi@gmail.com
                                    </span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-slate-200 hover:bg-gray-800 "
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-slate-200 hover:bg-gray-800"
                                        >
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-slate-200 hover:bg-gray-800"
                                        >
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-slate-200 hover:bg-gray-800"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}
