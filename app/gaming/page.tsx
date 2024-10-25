'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import Poker from '@/app/images/poker.png'
import Chess from '@/app/images/chess.png'
import Dice from '@/app/images/dice.png'
import Mahjong from '@/app/images/mahjong.png'
import Bg from '@/app/images/fortnite-cover.jpg'
import Gamer from '@/app/images/flyinggamer.png'
import RadialChart from '../components/RadialChart'
import Girl from '@/app/images/girl2.png'

import { useEffect } from 'react';

const MyComponent = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? <div>{window.innerWidth}</div> : null;
};




const gamesData = [
    {
        id: 1,
        name: "Poker",
        image: Poker

    },
    {
        id: 2,
        name: "Chess",
        image: Chess

    },
    {
        id: 3,
        name: "Dice",
        image: Dice

    },
    {
        id: 4,
        name: "Mahjong",
        image: Mahjong

    },

]

const boardData = [
    {
        id: 1,
        medal: "🥇",
        image: Girl,
        user: "ShadowStriker",
        game: "Serenity in the Storm",
        score: "150",

    },
    {
        id: 2,
        medal: "🥈",
        image: Girl,
        user: "MysticFox",
        game: "Deep Focus Quest",
        score: "130",

    },
    {
        id: 3,
        medal: "🥉",
        image: Girl,
        user: "PixelSamurai",
        game: "Serenity in the Storm",
        score: "110",

    },
    {
        id: 4,
        medal: "4",
        image: Girl,
        user: "ShadowStriker",
        game: "Serenity in the Storm",
        score: "150",

    },
    {
        id: 5,
        medal: "5",
        image: Girl,
        user: "ThunderMage",
        game: "Heart Rate Stability Trial",
        score: "100",

    },
]
const historyData = [
    {
        id: 1,
        game: "Fortnite",
        date: "10/12/2024",
        time: "03:53 PM",
        session: "1:37",
        score: "76/100",
        buttonClass: "bg-orange-400",

    },
    {
        id: 8,
        game: "Fortnite",
        date: "10/12/2024",
        time: "10:20 AM",
        session: "02:00",
        score: "76/100",
        buttonClass: "bg-orange-400",

    },
    {
        id: 3,
        game: "Call of Duty: WWII",
        date: "10/11/2024",
        time: "07:45 PM",
        session: "01:12",
        score: "81/100",
        buttonClass: "bg-indigo-500",

    },
    {
        id: 4,
        game: "Halo Infinite",
        date: "10/11/2024",
        time: "02:30 PM",
        session: "01:45",
        score: "69/100",
        buttonClass: "bg-blue-500",

    },
    {
        id: 5,
        game: "Fortnite",
        date: "10/10/2024",
        time: "04:15 PM",
        session: "02:30",
        score: "84/100",
        buttonClass: "bg-orange-400",

    },
    {
        id: 6,
        game: "Fortnite",
        date: "10/09/2024",
        time: "06:30 PM",
        session: "01:26",
        score: "71/100",
        buttonClass: "bg-orange-400",

    },
    {
        id: 7,
        game: "Call of Duty: WWII",
        date: "10/08/2024",
        time: "09:15 PM",
        session: "01:53",
        score: "79/100",
        buttonClass: "bg-indigo-500",

    },
    {
        id: 8,
        game: "Halo Infinite",
        date: "10/05/2024",
        time: "08:50 PM",
        session: "02:37",
        score: "82/100",
        buttonClass: "bg-blue-500",

    },
    {
        id: 9,
        game: "Call of Duty: WWII",
        date: "10/05/2024",
        time: "11:50 PM",
        session: "00:49",
        score: "80/100",
        buttonClass: "bg-indigo-500"
    },

]

export default function Page() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (

        <div className="min-h-screen bg-zinc-900 relative">
            {/* Glow effect container */}

            <div>
                <MyComponent /> {/* Now only loads on the client side */}
            </div>


            <div className="fixed inset-0 z-0 flex justify-start items-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-yellow-600 opacity-75 rounded-full blur-3xl"></div>
            </div>
            <div className='container mx-auto relative z-10'>
                <div className="head px-5">
                    <p className="text-xl text-center my-3">Featured</p>
                    <div className="grid grid-cols-1 sm:grid-cols-4 my-4 gap-4 px-5"> {/* Fixed padding and added gap */}
                        {gamesData.map((item) => (
                            <div key={item.id} className="poker rounded-lg hover:bg-slate-600/25">
                                <a href="/poker" className='bg-transparent'>
                                    <Image
                                        src={item.image}
                                        width={150}
                                        height={100}
                                        alt="Coin Icon"
                                        className="mx-auto"
                                    />
                                    <p className="text-lg text-center font-semibold">{item.name}</p>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 my-8'> {/* Single column on mobile */}
                        <div className="col-span-2 bg-div">
                            <div className='relative w-full h-[300px] rounded-lg z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute inset-0 flex items-center z-10">
                                    <div className="img-data pt-14">
                                        <div className="px-3 rotate-6">
                                            <p className="text-xl font-bold text-white">Earn <span className="text-yellow-500 text-3xl"> 1.5x </span> MindMint </p>
                                            <p className="text-xl font-bold text-white">Earn this Weekend Only! </p>
                                        </div>
                                        <div className="button m-3">
                                            <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2 text-center shadow-lg">Play & Earn!</button>
                                            <p className="text-xs py-4 opacity-40">Ends Monday midnight PST</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                                        <Image
                                            alt="Gamer"
                                            src={Gamer}
                                            width={200}
                                            height={80}
                                            className="rounded-full hover:opacity-50"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="block w-full p-6 bg-black border border-gray-700 rounded-lg shadow h-full">
                                <p className="font-semibold">Taken Reward Progress</p>
                                <div className="radialChart">
                                    <RadialChart />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"> {/* Single column on mobile */}
                        <div className="card">
                            <div className="block w-full p-6 bg-black border border-gray-700 rounded-lg shadow h-full">
                                <p className="font-semibold">Gaming Performance History</p>
                                <div className="history overflow-x-auto">
                                    <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 py-2">
                                            <tr>
                                                <th scope="col" className="px-6">Game</th>
                                                <th scope="col" className="px-6">Date/Time</th>
                                                <th scope="col" className="px-6">Session Length (HH:MM)</th>
                                                <th scope="col" className="px-6">MindSync Score</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {historyData.map((item) => (
                                                <tr key={item.id} className="bg-inherit text-center">
                                                    <td className="text-white text-xs">
                                                        <div className={`button ${item.buttonClass} rounded-lg px-2 py-1`}>
                                                            {item.game}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 text-white">
                                                        <p>{item.date}</p>
                                                        <p>{item.time}</p>
                                                    </td>
                                                    <td className="px-6 text-white">{item.session}</td>
                                                    <td className="px-6 text-white ">
                                                        <div className="button border border-indigo-800 py-1 px-3 rounded-xl text-lg">
                                                            {item.score}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="block w-full p-6 bg-black border border-gray-700 rounded-lg shadow h-full">
                                <p className="font-semibold text-xl">Leaderboard</p>
                                <div className="leaderboard  overflow-x-auto">
                                    <div className="dropdown mx-auto my-2 flex justify-end">
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

                                    <table className="w-full text-sm text-gray-500 dark:text-gray-400">
                                        <tbody>
                                            {boardData.map((item) => (
                                                <tr key={item.id} className="bg-inherit text-center">
                                                    <td className="px-2 py-4 text-2xl text-white font-extrabold">{item.medal}</td>
                                                    <td className="px-2 py-4">
                                                        <Image
                                                            src={item.image}
                                                            width={40}
                                                            height={10}
                                                            alt="user"
                                                            className="rounded-full border"
                                                        />
                                                    </td>
                                                    <td className="px-2 py-4 text-yellow-700">{item.user}</td>
                                                    <td className="px-2 py-4">{item.game}</td>
                                                    <td className="px-2 py-4 text-white">{item.score}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
