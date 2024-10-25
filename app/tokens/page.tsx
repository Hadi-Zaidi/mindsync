import React from 'react'
import { FaChartLine, FaUsers } from "react-icons/fa6";
import { IoIosTrendingUp, IoIosTrendingDown } from "react-icons/io";
import { IoCube } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import Piechart from '../components/Piechart';
import Image from 'next/image';
import Coin from '@/app/images/coin.png'

const tableData = [
    {
        id: 1,
        token: "1 Token",
        date: "12.09.2019 - 12.53 PM",
        imageSrc: Coin, // Update this to the correct image path
    },
    {
        id: 2,
        token: "1 Token",
        date: "12.09.2019 - 12.53 PM",
        imageSrc: Coin,
    },
    {
        id: 3,
        token: "1 Token",
        date: "12.09.2019 - 12.53 PM",
        imageSrc: Coin,
    },
    {
        id: 4,
        token: "1 Token",
        date: "12.09.2019 - 12.53 PM",
        imageSrc: Coin,
    },
    {
        id: 5,
        token: "1 Token",
        date: "12.09.2019 - 12.53 PM",
        imageSrc: Coin,
    },
    {
        id: 6,
        token: "1 Token",
        date: "12.09.2019 - 12.53 PM",
        imageSrc: Coin,
    },
    {
        id: 7,
        token: "1 Token",
        date: "12.09.2019 - 12.53 PM",
        imageSrc: Coin,
    },
];

export default function page() {
    return (
        <div className="min-h-screen bg-zinc-900 relative ">
            {/* Glow effect container */}
            <div className="fixed inset-0 z-0 flex justify-start items-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-purple-500 opacity-75 rounded-full blur-3xl"></div>
            </div>
            <div className='container mx-auto relative z-10'>
                <div className="grid grid-cols sm:grid-cols-4 gap-4">
                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <p className="text-slate-400 text-xs">Potential Growth</p>
                                    <p className="text-xl font-semibold">$12.34</p>
                                </div>
                                <div className='ml-auto'>
                                    <div className="bg-emerald-500 rounded-xl w-10 h-10 flex items-center justify-center">
                                        <FaChartLine className="text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="reponse flex text-xs mt-3">
                                <div className="flex text-emerald-500">
                                    <span className="text-lg"><IoIosTrendingUp /></span>
                                    <p className='mx-2'> 8.5%</p>
                                </div>
                                <p className="text-slate-400">Up from Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <p className="text-slate-400 text-xs">Revenue Current</p>
                                    <p className="text-xl font-semibold">$17.34</p>
                                </div>
                                <div className='ml-auto'>
                                    <div className="bg-indigo-500 rounded-xl w-10 h-10 flex items-center justify-center">
                                        <FaUsers className="text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="reponse flex text-xs mt-3">
                                <div className="flex text-emerald-500">
                                    <span className="text-lg"><IoIosTrendingUp /></span>
                                    <p className='mx-2'> 11%</p>
                                </div>
                                <p className="text-slate-400">Up from Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <p className="text-slate-400 text-xs">Daily Income</p>
                                    <p className="text-xl font-semibold">$12.04</p>
                                </div>
                                <div className='ml-auto'>
                                    <div className="bg-yellow-600 rounded-xl w-10 h-10 flex items-center justify-center">
                                        <IoCube className="text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="reponse flex text-xs mt-3">
                                <div className="flex text-red-500">
                                    <span className="text-lg"><IoIosTrendingDown /></span>
                                    <p className='mx-2'> 4.3%</p>
                                </div>
                                <p className="text-slate-400">Down from Yesterday</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <p className="text-slate-400 text-xs">Expense Current</p>
                                    <p className="text-xl font-semibold">$39.76</p>
                                </div>
                                <div className='ml-auto'>
                                    <div className="bg-red-400 rounded-xl w-10 h-10 flex items-center justify-center">
                                        <CiTimer className="text-xl" />
                                    </div>
                                </div>
                            </div>
                            <div className="reponse flex text-xs mt-3">
                                <div className="flex text-emerald-500">
                                    <span className="text-lg"><IoIosTrendingUp /></span>
                                    <p className='mx-2'> 1.8%</p>
                                </div>
                                <p className="text-slate-400">Up from Yesterday</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols my-6 sm:grid-cols-2 gap-4">
                    <div className="card">
                        <div className="block w-full p-6 bg-black border border-gray-700 rounded-lg shadow h-96">
                            <p className="text-lg font-semibold">Token Balance</p>
                            <div className="piachart">
                                <Piechart />
                            </div>
                        </div>
                    </div>
                    <div className="card relative">
                        <div className="block w-full py-6 bg-black border border-gray-700 rounded-lg shadow h-96 overflow-y-auto">
                            <div className="grid grid-cols-2 gap-4 px-6">
                                <div className="left">
                                    <p className="text-lg font-semibold">MindMint Feed</p>
                                </div>
                                <div className="right ml-auto">
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                        <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Refresh
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="table">
                                <div className="shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-gray-500 dark:text-gray-400">

                                        <tbody className='overflow-y-hidden'>
                                            {tableData.map((item) => (
                                                <tr key={item.id} className="bg-inherit">
                                                    <td className="px-5 py-4">
                                                        <Image
                                                            src={item.imageSrc}
                                                            width={30}  // Smaller icon on mobile
                                                            height={10}
                                                            alt="Coin Icon"
                                                            className="rounded-full"
                                                        />
                                                    </td>
                                                    <td className="px-5 py-4 text-white">{item.token}</td>
                                                    <td className="px-5 py-4">
                                                        <button
                                                            type="button"
                                                            className="text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1 text-center me-2 mb-2"
                                                        >
                                                            Validate
                                                        </button>
                                                    </td>
                                                    <td className="px-5 py-4 text-white">{item.date}</td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                        <div className="fix-button absolute px-3 bottom-4 right-4 z-10">
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2">View all</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
