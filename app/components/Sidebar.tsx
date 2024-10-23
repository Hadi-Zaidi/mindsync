'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaRegUser, FaUser } from "react-icons/fa";
import { PiHeartbeat, PiHeartbeatFill } from "react-icons/pi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { RiShoppingCart2Line, RiLogoutBoxLine, RiGamepadFill, RiGamepadLine, RiShoppingCartFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdKeyboardDoubleArrowLeft, MdOutlineAccountBalanceWallet, MdAccountBalanceWallet, MdOutlineNotListedLocation } from 'react-icons/md';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/images/logo.png';

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar toggle state
    const [hoveredIndex, setHoveredIndex] = useState(-1); // State to manage hover effect

    const pathname = usePathname(); // Get current pathname

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const links = [
        {
            name: "Home",
            path: "/home",
            icon: GoHome,
            iconActive: GoHomeFill,
            color: "text-indigo-300",
            activeColor: "text-indigo-400",
            shadowColor: "shadow-indigo-600"
        },
        {
            name: "Profile",
            path: "/profile",
            icon: FaRegUser,
            iconActive: FaUser,
            color: "text-red-500",
            activeColor: "text-red-600",
            shadowColor: "shadow-red-600"
        },
        {
            name: "Tokens",
            path: "/tokens",
            icon: MdOutlineAccountBalanceWallet,
            iconActive: MdAccountBalanceWallet,
            color: "text-purple-500",
            activeColor: "text-purple-600",
            shadowColor: "shadow-purple-600"
        },
        {
            name: "Gaming",
            path: "/gaming",
            icon: RiGamepadLine,
            iconActive: RiGamepadFill,
            color: "text-yellow-600",
            activeColor: "text-yellow-700",
            shadowColor: "shadow-yellow-600"
        },
        {
            name: "Wellness",
            path: "/wellness",
            icon: PiHeartbeat,
            iconActive: PiHeartbeatFill,
            color: "text-green-500",
            activeColor: "text-green-600",
            shadowColor: "shadow-green-600"
        },
        {
            name: "Training",
            path: "/training",
            icon: TbActivityHeartbeat,
            iconActive: TbActivityHeartbeat,
            color: "text-cyan-600",
            activeColor: "text-cyan-500",
            shadowColor: "shadow-cyan-700"
        },
        {
            name: "Marketplace",
            path: "/marketplace",
            icon: RiShoppingCart2Line,
            iconActive: RiShoppingCartFill,
            color: "text-pink-500",
            activeColor: "text-pink-600",
            shadowColor: "shadow-pink-500"
        },
    ];

    return (
        <div className={`bg-zinc-800 min-h-screen flex flex-col z-10 ${isSidebarOpen ? 'w-56' : 'w-16'} px-4 transition-all duration-300 relative`}>
            {/* Toggle Sidebar Button */}
            <div
                onClick={toggleSidebar}
                className="menu cursor-pointer ml-auto p-3 w-10 rounded-full text-slate-200 hover:text-slate-100 hover:bg-gray-700"
            >
                <MdKeyboardDoubleArrowLeft className={`${isSidebarOpen ? '' : 'rotate-180'}`} />
            </div>

            <div className="logo py-3 flex justify-center items-center border-b border-slate-400">
                <Image
                    src={Logo}
                    width={40}
                    height={10}
                    alt="Logo of the author"
                />
                {isSidebarOpen && (
                    <p className="text-white text-lg font-semibold ml-4">MindSync</p>
                )}
            </div>

            {/* Mapped Links */}
            <div className="nav-links my-5">
                {links.map((link, index) => {
                    const isActive = pathname === link.path; // Check if link is active

                    return (
                        <Link key={index} href={link.path}>
                            <div
                                className={`link flex text-sm items-center cursor-pointer space-x-4 py-2 rounded-lg transition-all duration-300 
                                ${isSidebarOpen ? 'pl-6' : 'justify-center'} 
                                ${isActive || hoveredIndex === index ? `shadow-lg ${link.shadowColor}` : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                                onMouseLeave={() => setHoveredIndex(-1)} // Reset hovered index on mouse leave
                            >
                                <span className={`${isActive || hoveredIndex === index ? link.activeColor : link.color} text-lg`}>
                                    {isActive || hoveredIndex === index ? <link.iconActive /> : <link.icon />}
                                </span>
                                {isSidebarOpen && (
                                    <span className={`${isActive ? link.activeColor : 'text-slate-300'} flex-grow`}>
                                        {link.name}
                                    </span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Other sidebar items (Tools, Logout) */}
            <div className="nav-links my-5">
                {isSidebarOpen && (
                    <div className="flex items-center mb-4 ">
                        <h2 className="text-xs text-slate-400">TOOLS</h2>
                        <div className="flex-grow border-b ml-4 border-slate-400"></div>
                    </div>
                )}

                <div className={`link flex text-sm items-center cursor-pointer space-x-4 py-2 rounded-lg hover:shadow-lg hover:shadow-indigo-600 ${isSidebarOpen ? 'pl-6' : 'justify-center'}`}>
                    <span className="text-white text-lg">
                        <IoSettingsOutline />
                    </span>
                    {isSidebarOpen && <Link href="/dashboard">Settings</Link>}
                </div>
                <div className={`link flex text-sm items-center cursor-pointer space-x-4 py-2 rounded-lg hover:shadow-lg hover:shadow-indigo-600 ${isSidebarOpen ? 'pl-6' : 'justify-center'}`}>
                    <span className="text-white text-lg">
                        <MdOutlineNotListedLocation />
                    </span>
                    {isSidebarOpen && <Link href="/dashboard">Help</Link>}
                </div>
            </div>

            <div className="mt-auto"></div>

            {/* Logout Button */}
            <div className={`link flex text-sm items-center cursor-pointer space-x-4 py-2 rounded-lg hover:shadow-lg hover:shadow-indigo-600 ${isSidebarOpen ? 'pl-6' : 'justify-center'}`}>
                <span className="text-white text-lg">
                    <RiLogoutBoxLine />
                </span>
                {isSidebarOpen && <Link href="/dashboard">Logout</Link>}
            </div>
        </div>
    );
}
