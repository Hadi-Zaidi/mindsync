import React from 'react';
import OverviewChart from '../components/OverviewChart';
import YouTubeEmbed from './Video'; // Ensure the correct path to your component
import RadialChart from '../components/RadialChart';

const logsData = [
    {
        id: 1,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 2,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 3,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 4,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 5,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 6,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 7,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 8,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 9,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 10,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 11,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 12,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 13,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 14,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
    {
        id: 14,
        timestamp: "Timestamp: 2024-09-12 17:13:30. State: Likely Focused (Beta), Alpha ",
        power: "Power: 56.47, Theta Power: 80.61, Beta Power: 106.33",

    },
];

export default function Page() {
    return (
        <div className="min-h-screen bg-zinc-900 relative">
            {/* Glow effect container */}
            <div className="fixed inset-0 z-0 flex justify-start items-center pointer-events-none">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-cyan-600 opacity-75 rounded-full blur-3xl"></div>
            </div>
            <div className='container mx-auto relative z-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"> {/* Fixed grid-cols */}
                    <div className="card h-full"> {/* Set h-full here */}
                        <div className="max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow h-full flex flex-col">
                            <p className="font-semibold">Training Chart</p>
                            <div className="chart flex-grow my-3"> {/* Use flex-grow to allow this div to take available space */}
                                <OverviewChart />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <p className="font-semibold">Focus Video of the Day</p>
                            <div className="video my-3">
                                <YouTubeEmbed videoId="PBFK6LD4470" />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow h-full">
                            <p className="font-semibold">Real-Time Logs</p>
                            <div className="logs my-3 h-48 overflow-y-auto">
                                {logsData.map((item) => (
                                    <div key={item.id} className="logs-text text-slate-200">
                                        <p>{item.timestamp}</p>
                                        <p>{item.power}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="block max-w-lg p-6 bg-black border border-gray-700 rounded-lg shadow">
                            <p className="font-semibold">Tokens Mounted</p>
                            <div className="tokens my-3">
                                <RadialChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

