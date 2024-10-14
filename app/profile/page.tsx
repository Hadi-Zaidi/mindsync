import Image from 'next/image'
import React from 'react'
import Soon from '@/app/images/coming-soon.png'

export default function page() {
    return (
        <div className="min-h-screen bg-zinc-900 relative">
            {/* Glow effect container */}
            <div className="absolute inset-0 z-0 flex justify-start items-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-red-600 opacity-75 rounded-full blur-3xl"></div>
            </div>
            <div className='container mx-auto relative z-10 flex justify-center items-center min-h-screen'>
                <div className="card ">
                    <div className="block max-w-sm h-4/5 p-6 bg-black border border-gray-700 rounded-lg shadow">
                        <div className="main-div flex flex-col justify-center items-center h-full">
                            <Image
                                src={Soon}
                                width={250}  // Smaller icon on mobile
                                height={100}
                                alt="Coin Icon"
                                className="my-4"
                            />
                            <p className="text-lg text-center my-4 sm:text-2xl">Check Back Soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
