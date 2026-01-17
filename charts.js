// Chart.js configuration and data
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {

    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: '#e8e8e8',
                    font: {
                        size: 12
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: { color: '#a0a0a0' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            y: {
                ticks: { color: '#a0a0a0' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        }
    };

    // Historical Wealth Chart (Slide 3)
    const historicalCtx = document.getElementById('historicalWealthChart');
    if (historicalCtx) {
        new Chart(historicalCtx, {
            type: 'line',
            data: {
                labels: ['1913', '1929', '1940', '1950', '1960', '1970', '1979', '1990', '2000', '2012', '2024'],
                datasets: [
                    {
                        label: 'Top 0.1% Wealth Share (%)',
                        data: [22, 25, 19, 12, 10, 8, 7, 10, 15, 22, 21],
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.2)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Top 1% Wealth Share (%)',
                        data: [42, 45, 38, 30, 28, 26, 25, 30, 35, 40, 30.5],
                        borderColor: '#fd7e14',
                        backgroundColor: 'rgba(253, 126, 20, 0.2)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'The U-Shape of Wealth Concentration (1913-2024)',
                        color: '#ffd700',
                        font: { size: 16 }
                    }
                }
            }
        });
    }

    // Bottom 90% Wealth Share Chart (Slide 5)
    const bottom90Ctx = document.getElementById('bottom90Chart');
    if (bottom90Ctx) {
        new Chart(bottom90Ctx, {
            type: 'line',
            data: {
                labels: ['1920s', '1940', '1960', '1980', '1985', '1990', '2000', '2012', '2024'],
                datasets: [{
                    label: 'Bottom 90% Wealth Share (%)',
                    data: [20, 25, 30, 33, 35, 32, 28, 23, 24],
                    borderColor: '#0d6efd',
                    backgroundColor: 'rgba(13, 110, 253, 0.3)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: '#0d6efd'
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Rise and Fall of Middle Class Wealth Share',
                        color: '#ffd700',
                        font: { size: 16 }
                    },
                    annotation: {
                        annotations: {
                            peak: {
                                type: 'label',
                                xValue: '1985',
                                yValue: 37,
                                content: ['Peak: 35%'],
                                color: '#198754',
                                font: { weight: 'bold' }
                            }
                        }
                    }
                },
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        min: 15,
                        max: 40,
                        title: {
                            display: true,
                            text: 'Wealth Share (%)',
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }

    // CEO Pay Ratio Chart (Slide 6)
    const ceoPayCtx = document.getElementById('ceoPayChart');
    if (ceoPayCtx) {
        new Chart(ceoPayCtx, {
            type: 'bar',
            data: {
                labels: ['1965', '1978', '1989', '2000', '2007', '2022', '2024'],
                datasets: [{
                    label: 'CEO-to-Worker Pay Ratio',
                    data: [21, 31, 60, 380, 329, 344, 281],
                    backgroundColor: [
                        'rgba(25, 135, 84, 0.8)',
                        'rgba(25, 135, 84, 0.8)',
                        'rgba(253, 126, 20, 0.8)',
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(220, 53, 69, 0.8)'
                    ],
                    borderColor: [
                        '#198754',
                        '#198754',
                        '#fd7e14',
                        '#dc3545',
                        '#dc3545',
                        '#dc3545',
                        '#dc3545'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'CEO-to-Worker Pay Ratio Over Time',
                        color: '#ffd700',
                        font: { size: 16 }
                    }
                },
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Ratio (CEO Pay : Worker Pay)',
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }

    // Pay Growth Comparison Chart (Slide 7)
    const payGrowthCtx = document.getElementById('payGrowthChart');
    if (payGrowthCtx) {
        new Chart(payGrowthCtx, {
            type: 'line',
            data: {
                labels: ['1978', '1985', '1990', '1995', '2000', '2005', '2010', '2015', '2020', '2024'],
                datasets: [
                    {
                        label: 'CEO Pay Growth (%)',
                        data: [0, 100, 200, 400, 800, 600, 700, 900, 1000, 1094],
                        borderColor: '#dc3545',
                        backgroundColor: 'rgba(220, 53, 69, 0.1)',
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Worker Pay Growth (%)',
                        data: [0, 3, 6, 9, 12, 14, 16, 18, 22, 26],
                        borderColor: '#0d6efd',
                        backgroundColor: 'rgba(13, 110, 253, 0.1)',
                        fill: true,
                        tension: 0.4
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Cumulative Pay Growth Since 1978',
                        color: '#ffd700',
                        font: { size: 16 }
                    }
                },
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        title: {
                            display: true,
                            text: 'Growth (%)',
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }

    // Current Distribution Chart (Slide 8)
    const currentDistCtx = document.getElementById('currentDistributionChart');
    if (currentDistCtx) {
        new Chart(currentDistCtx, {
            type: 'bar',
            data: {
                labels: ['Top 1%', 'Next 9%\n(90-99th)', 'Next 40%\n(50-90th)', 'Bottom 50%'],
                datasets: [
                    {
                        label: 'Share of Wealth (%)',
                        data: [30.5, 35, 32, 2.5],
                        backgroundColor: [
                            'rgba(220, 53, 69, 0.8)',
                            'rgba(253, 126, 20, 0.8)',
                            'rgba(13, 110, 253, 0.8)',
                            'rgba(25, 135, 84, 0.8)'
                        ],
                        borderWidth: 0
                    },
                    {
                        label: 'Share of Population (%)',
                        data: [1, 9, 40, 50],
                        backgroundColor: [
                            'rgba(220, 53, 69, 0.3)',
                            'rgba(253, 126, 20, 0.3)',
                            'rgba(13, 110, 253, 0.3)',
                            'rgba(25, 135, 84, 0.3)'
                        ],
                        borderColor: [
                            '#dc3545',
                            '#fd7e14',
                            '#0d6efd',
                            '#198754'
                        ],
                        borderWidth: 2
                    }
                ]
            },
            options: {
                ...commonOptions,
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Wealth Share vs Population Share (2024)',
                        color: '#ffd700',
                        font: { size: 16 }
                    }
                },
                scales: {
                    ...commonOptions.scales,
                    y: {
                        ...commonOptions.scales.y,
                        max: 55,
                        title: {
                            display: true,
                            text: 'Percentage (%)',
                            color: '#a0a0a0'
                        }
                    }
                }
            }
        });
    }

    // Current vs Ideal Distribution Pie Charts (Slide 10)
    const currentPieCtx = document.getElementById('currentPieChart');
    if (currentPieCtx) {
        new Chart(currentPieCtx, {
            type: 'doughnut',
            data: {
                labels: ['Top 1%', 'Next 9%', 'Next 40%', 'Bottom 50%'],
                datasets: [{
                    data: [30.5, 35, 32, 2.5],
                    backgroundColor: [
                        '#dc3545',
                        '#fd7e14',
                        '#0d6efd',
                        '#198754'
                    ],
                    borderWidth: 2,
                    borderColor: '#1a1a2e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e8e8e8',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    const idealPieCtx = document.getElementById('idealPieChart');
    if (idealPieCtx) {
        new Chart(idealPieCtx, {
            type: 'doughnut',
            data: {
                labels: ['Top 1%', 'Next 9%', 'Next 40%', 'Bottom 50%'],
                datasets: [{
                    data: [15, 25, 45, 15],
                    backgroundColor: [
                        '#dc3545',
                        '#fd7e14',
                        '#0d6efd',
                        '#198754'
                    ],
                    borderWidth: 2,
                    borderColor: '#1a1a2e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e8e8e8',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // Gini Coefficient Chart (Slide 12)
    const giniCtx = document.getElementById('giniChart');
    if (giniCtx) {
        new Chart(giniCtx, {
            type: 'bar',
            data: {
                labels: ['United States', 'United Kingdom', 'OECD Average', 'Germany', 'Sweden', 'Iceland'],
                datasets: [{
                    label: 'Gini Coefficient (lower = more equal)',
                    data: [0.41, 0.35, 0.31, 0.31, 0.28, 0.25],
                    backgroundColor: [
                        'rgba(220, 53, 69, 0.8)',
                        'rgba(253, 126, 20, 0.8)',
                        'rgba(255, 193, 7, 0.8)',
                        'rgba(13, 110, 253, 0.8)',
                        'rgba(13, 202, 240, 0.8)',
                        'rgba(25, 135, 84, 0.8)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                ...commonOptions,
                indexAxis: 'y',
                plugins: {
                    ...commonOptions.plugins,
                    title: {
                        display: true,
                        text: 'Income Inequality: Gini Coefficient Comparison',
                        color: '#ffd700',
                        font: { size: 16 }
                    }
                },
                scales: {
                    x: {
                        ...commonOptions.scales.x,
                        min: 0,
                        max: 0.5,
                        title: {
                            display: true,
                            text: 'Gini Coefficient',
                            color: '#a0a0a0'
                        }
                    },
                    y: {
                        ...commonOptions.scales.y,
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Stock Ownership Chart (Slide 13)
    const stockCtx = document.getElementById('stockOwnershipChart');
    if (stockCtx) {
        new Chart(stockCtx, {
            type: 'doughnut',
            data: {
                labels: ['Top 1%', 'Next 9%', 'Bottom 90%'],
                datasets: [{
                    data: [50, 37, 13],
                    backgroundColor: [
                        '#dc3545',
                        '#fd7e14',
                        '#0d6efd'
                    ],
                    borderWidth: 3,
                    borderColor: '#1a1a2e'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#e8e8e8',
                            padding: 20,
                            font: { size: 14 }
                        }
                    },
                    title: {
                        display: true,
                        text: 'Stock Market Ownership by Wealth Group',
                        color: '#ffd700',
                        font: { size: 16 }
                    }
                }
            }
        });
    }
});
