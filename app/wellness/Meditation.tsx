'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import Bg1 from '@/app/images/1.jpg'
import Bg2 from '@/app/images/2.jpg'
import Bg3 from '@/app/images/3.jpg'

export default function Meditation() {
    // Step 1: State management for active tab
    const [activeTab, setActiveTab] = useState("styled-profile");

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div className="container mx-auto mt-8">

            {/* Step 4: Tab Content */}
            <div id="default-styled-tab-content">
                <div className={`p-4 rounded-lg ${activeTab === "styled-profile" ? "" : "hidden"}`} role="tabpanel">
                    <div className="span1">
                        <div className="grid grid-cols sm:grid-cols-2 gap-4 my-3">
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Nomad's Mountain</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Enchanted Forest</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols sm:grid-cols-3 gap-4 my-3">
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg3}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Mystic Cave</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Jedi Council</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Wizard's Tower</p>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols sm:grid-cols-2 gap-4 my-3">
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Davinci's Workshop</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Temple of Poseidon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`p-4 rounded-lg ${activeTab === "styled-dashboard" ? "" : "hidden"}`} role="tabpanel">
                    <div className="span2">
                        <div className="grid grid-cols sm:grid-cols-3 gap-4 my-3">
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg3}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Mystic Cave</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Jedi Council</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Wizard's Tower</p>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols sm:grid-cols-2 gap-4 my-3">
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Nomad's Mountain</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Enchanted Forest</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols sm:grid-cols-2 gap-4 my-3">
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Davinci's Workshop</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Temple of Poseidon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`p-4 rounded-lg ${activeTab === "styled-settings" ? "" : "hidden"}`} role="tabpanel">
                    <div className="span3">
                        <div className="grid grid-cols sm:grid-cols-2 gap-4 my-3">
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Nomad's Mountain</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Enchanted Forest</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols sm:grid-cols-2 gap-4 my-3">
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Davinci's Workshop</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Temple of Poseidon</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols sm:grid-cols-3 gap-4 my-3">
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg3}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Mystic Cave</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Jedi Council</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Wizard's Tower</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`p-4 rounded-lg ${activeTab === "styled-contacts" ? "" : "hidden"}`} role="tabpanel">
                    <div className="span4">
                        <div className="grid grid-cols sm:grid-cols-3 gap-4 my-3">
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg3}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Mystic Cave</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Jedi Council</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Wizard's Tower</p>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols sm:grid-cols-3 gap-4 my-3">
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg3}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Mystic Cave</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Jedi Council</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[400px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Wizard's Tower</p>
                                </div>
                            </div>

                        </div>
                        <div className="grid grid-cols sm:grid-cols-2 gap-4 my-3">
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg2}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Davinci's Workshop</p>
                                </div>
                            </div>
                            <div className='relative w-full h-[300px] rounded-xl z-0 p-4'>
                                <Image
                                    alt="Mountains"
                                    src={Bg1}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    className="object-fit bg-center rounded-lg"
                                />
                                {/* Overlay text */}
                                <div className="absolute z-10">
                                    <p className="text-sm">Temple of Poseidon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Step 3: Tabs Navigation */}
            <div className="mb-4 bg-gray-800 rounded-full w-1/2 mx-auto">
                <ul className="flex flex-wrap justify-center -mb-px text-sm font-medium text-center">
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 rounded-t-lg hover:bg-slate-950 ${activeTab === "styled-profile" ? "text-white bg-slate-950" : "text-slate-300"}`}
                            onClick={() => handleTabChange("styled-profile")}
                            role="tab"
                        >
                            Profile
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 rounded-t-lg hover:bg-slate-950 ${activeTab === "styled-dashboard" ? "text-white bg-slate-950" : "text-slate-300"}`}
                            onClick={() => handleTabChange("styled-dashboard")}
                            role="tab"
                        >
                            Dashboard
                        </button>
                    </li>
                    <li className="me-2" role="presentation">
                        <button
                            className={`inline-block p-4 rounded-t-lg hover:bg-slate-950 ${activeTab === "styled-settings" ? "text-white bg-slate-950" : "text-slate-300"}`}
                            onClick={() => handleTabChange("styled-settings")}
                            role="tab"
                        >
                            Settings
                        </button>
                    </li>
                    <li role="presentation">
                        <button
                            className={`inline-block p-4 rounded-t-lg hover:bg-slate-950 ${activeTab === "styled-contacts" ? "text-white bg-slate-950" : "text-slate-300"}`}
                            onClick={() => handleTabChange("styled-contacts")}
                            role="tab"
                        >
                            Contacts
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
