'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts'; // Import ApexOptions type

// Dynamically import ApexCharts with no SSR
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function RadialChart() {
    // Define the options as ApexOptions
    const options: ApexOptions = {
        chart: {
            height: 280,
            type: 'radialBar',
        },
        series: [67],
        colors: ['#20e68d'],
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                track: {
                    background: '#333',
                    startAngle: -135,
                    endAngle: 135,
                },
                dataLabels: {
                    name: {
                        show: false, // Do not show the name label
                    },
                    value: {
                        fontSize: '30px',
                        color: 'white', // Color of progress text
                        show: true, // Show the value label
                    },
                },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                gradientToColors: ['#87D4F9'],
                stops: [0, 100],
            },
        },
        stroke: {
            lineCap: 'round',
        },
        labels: ['Progress'], // Label for the radial chart
    };

    return (
        <div className="h-full">
            <ApexCharts options={options} series={[67]} type="radialBar" height={280} />
        </div>
    );
}
