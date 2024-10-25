import React from 'react';
import Image from 'next/image';
import User from "@/app/images/me.jpg";
import { FaShield } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import OverviewChart from '../components/OverviewChart';

export default function page() {
    return (
        <div className="min-h-screen bg-zinc-900 relative ">
            {/* Glow effect container */}
            <div className="fixed inset-0 z-0 flex justify-start items-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-indigo-400 opacity-75 rounded-full blur-3xl"></div>
            </div>
            <div className='container mx-auto relative z-10'> {/* Added relative z-10 */}
                {/* Header */}
                <div className='border-b-2 border-slate-500'>
                    <div className="flex header my-3">
                        <Image
                            src={User}
                            width={50}  // Smaller icon on mobile
                            height={20}
                            alt="Pic of User"
                            className='rounded-full border border-lg border-white'
                        />
                        <div className="header-text block mx-3">
                            <h1 className="text-4xl">Welcome back, Hadi!</h1>
                            <div className="header-subtext flex">
                                <span className="text-green-600 text-xs"><FaShield /></span>
                                <p className="text-xs text-slate-500 mx-1">Member since Sept, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* body */}
                <div className="body px-6 my-6">
                    <div className="top grid grid-cols sm:grid-cols-2">
                        <div>
                            <h4 className="text-2xl">Continue Training</h4>
                        </div>
                        <div className='ml-auto'>
                            <div className="flex text-2xl">
                                <p className="">You're on a roll! </p>
                                {/* <p className="">You&apos;re on a roll! </p> */}
                                <span className="text-yellow-500 mx-1"><IoIosStar /></span>
                            </div>
                            <div className="header-subtext">
                                <p className="text-xs text-slate-500 mx-1">You've logged 5 sessions this week!</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <div className="grid grid-cols sm:grid-cols-3">
                                <div className="col-span-2 flex">
                                    <div className="icon text-lg sm:text-3xl">
                                        <HiMiniSquare3Stack3D />
                                    </div>
                                    <div className="text block mx-3">
                                        <p className="text-sm font-semibold">Intermediate Focus Training</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                            <div className="bg-indigo-400 h-2.5 rounded-full w-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 button ml-5 sm:ml-auto">
                                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-1 my-2">Resume</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Graph */}
                    <div className="graph my-3">
                        <div className="block min-w-full p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <p className="text-sm font-semibold">Overview</p>
                            <div className="chart max-w-lg m-auto">
                                <OverviewChart />
                            </div>
                        </div>
                    </div>
                    {/* Add Widget */}
                    <div className="grid grid-cols-2 gap-3 h-24">
                        <div className="widge-1 bg-gray-500 rounded-lg border border-dashed border-slate-400 flex justify-center items-center">
                            <p className="text-black text-center">Add Widget</p>
                        </div>
                        <div className="widge-1 bg-gray-500 rounded-lg border border-dashed border-slate-400 flex justify-center items-center">
                            <p className="text-black text-center">Add Widget</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
