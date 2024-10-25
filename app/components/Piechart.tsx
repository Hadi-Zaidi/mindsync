'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts'; // Import the ApexOptions type

// Dynamically import ApexCharts with no SSR
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function PieChart() {
    // Define the options as ApexOptions
    const options: ApexOptions = {
        chart: {
            height: 250,
            type: 'pie', // Ensure 'pie' is a valid type
            fontFamily: 'Inter, sans-serif',
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        labels: ['Gaming', 'Wellness', 'Training'], // Define labels for the pie chart
        colors: ['#fcba03', '#03fc6b', '#036ffc'], // Set colors for the pie slices
        stroke: {
            colors: ['black'],
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: 0,
                },
            },
        },
        legend: {
            position: 'bottom',
            fontFamily: 'Inter, sans-serif',
        },
    };

    const series = [50, 30, 20]; // Data for the pie chart

    return (
        <div className="h-36">
            <ApexCharts options={options} series={series} type="pie" height={250} />
        </div>
    );
}
