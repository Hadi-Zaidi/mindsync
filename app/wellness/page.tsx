import React from 'react'
import Masonary from './Masonary';
import Overview from './Overview';

export default function page() {

    return (
        <div className="min-h-screen bg-zinc-900 relative">
            {/* Glow effect container */}
            <div className="fixed inset-0 z-0 flex justify-start items-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-green-600 opacity-75 rounded-full blur-3xl"></div>
            </div>
            <div className='container mx-auto relative z-10'>
                <div className="card">
                    <div className="block w-full p-6 bg-black border border-gray-700 rounded-lg shadow h-full">
                        <div className="overview">
                            <Overview />
                        </div>
                    </div>
                </div>
                <div className="medtation">
                    <p className="font-semibold text-xl text-center my-4">Meditation Rooms</p>
                    <div className="tabs">
                        <Masonary />
                    </div>
                </div>
            </div>
        </div>
    )
}
