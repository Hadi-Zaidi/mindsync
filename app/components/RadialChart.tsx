'use client'

import React, { useEffect } from 'react'

export default function RadialChart() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const ApexCharts = require('apexcharts');

            const options = {

                chart: {
                    height: 280,
                    type: "radialBar",
                },
                series: [67],
                colors: ["#20e68d"],
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
                                show: false,
                            },
                            value: {
                                fontSize: "30px",
                                color: "white", // Color of progress text
                                show: true
                            }
                        }
                    }
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        type: "horizontal",
                        gradientToColors: ["#87D4F9"],
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: "round"
                },
                labels: ["Progress"]

            };

            const chart = new ApexCharts(document.querySelector('#radialchart'), options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, []);

    return (
        <div className="h-full" id="radialchart">

        </div>
    )
}
