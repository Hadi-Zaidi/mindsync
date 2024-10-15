'use client';

import React, { useState } from 'react'
import { GiSandsOfTime } from "react-icons/gi";
import { PiHeartbeatFill } from "react-icons/pi";
import { MdCheckBox } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const cardData = [
    {
        id: 1,
        icon: <GiSandsOfTime className='mx-1' />,
        heading: "Total Meditation Time",
        time: "8 hours 25 minutes",
        cardBg: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
        id: 2,
        icon: <PiHeartbeatFill className='mx-1' />,
        heading: "Average Heart Rate Variability",
        time: "67 ms",
        cardBg: "bg-gradient-to-r from-pink-500 to-purple-500"
    },
    {
        id: 3,
        icon: <MdCheckBox className='mx-1' />,
        heading: "Sessions Completed",
        time: "12 Sessions",
        cardBg: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
        id: 4,
        icon: <FaSearch className='mx-1' />,
        heading: "Deep Focus Time",
        time: "1 hour 8 minutes",
        cardBg: "bg-gradient-to-br from-green-500 to-purple-600"
    },
]

export default function Overview() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="overview-head flex my-2">
                <p className="font-semibold texl-lg">Overview</p>
                <div className="dropdown ml-auto relative">
                    <button
                        onClick={toggleDropdown}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none border border-gray-400 font-medium rounded-lg text-xs px-3 py-1 text-center inline-flex items-center"
                        type="button"
                    >
                        This Week
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'} absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">November</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">December</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">January</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">February</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overview">
                <div className="grid grid-cols sm:grid-cols-4 gap-4">
                    {cardData.map((item) => (
                        <div key={item.id} className="card">
                            <div className={`block w-full p-6 ${item.cardBg} rounded-xl shadow-lg h-full`}>
                                <div className="card-data">
                                    <div className="icon text-3xl max-w-10 rounded-full bg-gradient-to-br from-[#ffffff8a] to-transparent py-2 text-center my-3">
                                        {item.icon}
                                    </div>
                                    <p className="text-sm font-thin">{item.heading}</p>
                                    <p className="text-lg font-bold">{item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
