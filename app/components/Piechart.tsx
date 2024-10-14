'use client'

import { useEffect } from 'react';

export default function Piechart() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ApexCharts = require('apexcharts');

            const options = {
                series: [50, 30, 20],
                colors: ["#fcba03", "#03fc6b", "#036ffc"],
                chart: {
                    height: 250,
                    width: "100%",
                    type: "pie",
                },
                stroke: {
                    colors: ["black"],
                    lineCap: "",
                },
                plotOptions: {
                    pie: {
                        labels: {
                            show: true,
                        },
                        size: "100%",
                        dataLabels: {
                            offset: 0
                        }
                    },
                },
                labels: ["Gaming", "Wellness", "Training"],
                dataLabels: {
                    enabled: false,
                    style: {
                        fontFamily: "Inter, sans-serif",
                    },
                },
                legend: {
                    position: "bottom",
                    fontFamily: "Inter, sans-serif",
                },
                yaxis: {
                    labels: {
                        formatter: function (value) {
                            return value + "%";
                        },
                    },
                },
                xaxis: {
                    labels: {
                        formatter: function (value) {
                            return value + "%";
                        },
                    },
                    axisTicks: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
            };

            const chart = new ApexCharts(document.querySelector('#piechart'), options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div className="h-36" id="piechart"></div>
    );
}
