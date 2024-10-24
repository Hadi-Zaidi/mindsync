import Image from 'next/image'
import React from 'react'
import Soon from '@/app/images/coming-soon.png'
import img1 from '@/app/images/1.jpg'
import img2 from '@/app/images/2.jpg'
import img3 from '@/app/images/3.jpg'
import Link from 'next/link'



const cards = [
    {
        id: 1,
        heading: "Wellness Gear 🧘‍♀️",
        images: [
            { id: 1, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 2, img: img2, link: "#", imgHead: "Meditation Cusions" },
            { id: 3, img: img3, link: "#", imgHead: "Essential Oils & Diffusers" },
            { id: 4, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 5, img: img2, link: "#", imgHead: "Yoga Mats" },
            { id: 6, img: img3, link: "#", imgHead: "Yoga Mats" },
            { id: 7, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 8, img: img2, link: "#", imgHead: "Yoga Mats" },

        ],
    },
    {
        id: 2,
        heading: "Gaming & Focus Enhancements 🎮",
        images: [
            { id: 1, img: img1, link: "#", imgHead: "Gaming Headsets" },
            { id: 2, img: img2, link: "#", imgHead: "Gaming Chairs" },
            { id: 3, img: img3, link: "#", imgHead: "Blue Light Blocking Glasses" },
            { id: 4, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 5, img: img2, link: "#", imgHead: "Yoga Mats" },
            { id: 6, img: img3, link: "#", imgHead: "Yoga Mats" },
            { id: 7, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 8, img: img2, link: "#", imgHead: "Yoga Mats" },

        ],
    },
    {
        id: 3,
        heading: "Biofeedback Devices 📊",
        images: [
            { id: 1, img: img1, link: "#", imgHead: "Egg Headsets" },
            { id: 2, img: img2, link: "#", imgHead: "Heart rate & HRV" },
            { id: 3, img: img3, link: "#", imgHead: "Sleep Tracker" },
            { id: 4, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 5, img: img2, link: "#", imgHead: "Yoga Mats" },
            { id: 6, img: img3, link: "#", imgHead: "Yoga Mats" },
            { id: 7, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 8, img: img2, link: "#", imgHead: "Yoga Mats" },

        ],
    },
    {
        id: 4,
        heading: "At Home Testing home🏠",
        images: [
            { id: 1, img: img1, link: "#", imgHead: "Viome" },
            { id: 2, img: img2, link: "#", imgHead: "Zoe" },
            { id: 3, img: img3, link: "#", imgHead: "invivo" },
            { id: 4, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 5, img: img2, link: "#", imgHead: "Yoga Mats" },
            { id: 6, img: img3, link: "#", imgHead: "Yoga Mats" },
            { id: 7, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 8, img: img2, link: "#", imgHead: "Yoga Mats" },

        ],
    },
    {
        id: 5,
        heading: "Exclusive Music Playlist 🎵",
        images: [
            { id: 1, img: img1, link: "#", imgHead: "Spartan Training Gorunds" },
            { id: 2, img: img2, link: "#", imgHead: "Marpheus' Dojo" },
            { id: 3, img: img3, link: "#", imgHead: "The Dragon's Peak" },
            { id: 4, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 5, img: img2, link: "#", imgHead: "Yoga Mats" },
            { id: 6, img: img3, link: "#", imgHead: "Yoga Mats" },
            { id: 7, img: img1, link: "#", imgHead: "Yoga Mats" },
            { id: 8, img: img2, link: "#", imgHead: "Yoga Mats" },

        ],
    },
]

export default function page() {
    return (
        <div className="min-h-screen bg-zinc-900 relative">
            {/* Glow effect container */}
            <div className="fixed inset-0 z-0 flex justify-start items-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-pink-600 opacity-75 rounded-full blur-3xl"></div>
            </div>
            {/* <div className='container mx-auto relative z-10 flex justify-center items-center min-h-screen'>*/}
            <div className='container mx-auto relative z-10'>
                <div className='my-2 flex justify-end'>
                    <Link href="#">
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-30">
                            <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-xl group-hover:bg-opacity-0">
                                Wallet
                            </span>
                        </button>
                    </Link>
                </div>
                {cards.map((card) => (
                    <div key={card.id} className="card my-4">
                        <div className="block p-2 sm:p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <h1 className="text-lg text-white">{card.heading}</h1>
                            <div className="w-full max-w-[200px] sm:max-w-5xl mx-auto p-4">
                                <div className="overflow-x-auto scrollbar-h-2 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-900">
                                    <div className="flex space-x-4">
                                        {card.images.map((item) => (
                                            <Link href={item.link}>
                                                <div key={item.id} className=" rounded-xl min-w-[100px] sm:min-w-[300px] h-48 bg-gray-300 flex-shrink-0 relative z-0 hover:min-w-[150px] sm:hover:min-w-[350px] duration-300">
                                                    <Image
                                                        src={item.img}
                                                        alt={`Image ${item.id + 1}`}
                                                        width={200}
                                                        height={192}
                                                        className="object-fit w-full h-full rounded-lg"
                                                    />
                                                    <div className="m-2 absolute inset-0 flex items-end z-10">
                                                        <h1 className="text-lg">{item.imgHead}</h1>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}



            </div>


        </div>
    )
}
