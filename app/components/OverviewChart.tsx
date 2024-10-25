'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts'; // Import the ApexOptions type

// Dynamically import ApexCharts with no SSR
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function OverviewChart() {
  // Define the options as ApexOptions
  const options: ApexOptions = {
    chart: {
      sparkline: {
        enabled: false,
      },
      height: '100%',
      width: '100%',
      type: 'area', // Make sure 'area' is a valid type
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
        },
        formatter: (value) => '$' + value.toFixed(2), // Ensures two decimal points for better readability
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Developer Edition',
      data: [12, 141, 56, 84, 135, 45],
      color: '#1A56DB',
    },
    {
      name: 'Designer Edition',
      data: [43, 13, 65, 12, 42, 73],
      color: '#7E3BF2',
    },
    {
      name: 'Designer Edition',
      data: [58, 100, 52, 84, 25, 96],
      color: '#42f575',
    },
  ];

  return (
    <div className="h-full">
      <ApexCharts options={options} series={series} type="area" height="100%" />
    </div>
  );
}
