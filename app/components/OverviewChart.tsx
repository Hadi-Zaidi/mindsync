'use client'

import { useEffect } from 'react';

export default function OverviewChart() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ApexCharts = require('apexcharts');

      const options = {
        xaxis: {
          show: true,
          categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
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
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
            formatter: function (value: number) {  // TypeScript-friendly, explicitly typing the 'value'
              return '$' + value.toFixed(2); // Ensures two decimal points for better readability
            }
          }
        },
        series: [
          {
            name: "Developer Edition",
            data: [12, 141, 56, 84, 135, 45],
            color: "#1A56DB",
          },
          {
            name: "Designer Edition",
            data: [43, 13, 65, 12, 42, 73],
            color: "#7E3BF2",
          },
          {
            name: "Designer Edition",
            data: [58, 100, 52, 84, 25, 96],
            color: "#42f575",
          },
        ],
        chart: {
          sparkline: {
            enabled: false
          },
          height: "100%",
          width: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
        },
      };

      const chart = new ApexCharts(document.querySelector('#chart'), options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className="h-full" id="chart"></div>
  );
}
