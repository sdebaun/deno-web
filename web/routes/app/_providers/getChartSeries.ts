export const getChartSeries = () => [
  {
    name: "Signal Strength (dBm)",
    type: "line",
    data: [
      { x: 0, y: -30 },
      { x: 10000, y: -50 },
      { x: 20000, y: -50 },
      { x: 30000, y: -50 },
    ],
  },
  {
    name: "Wifi Latency (ms)",
    type: "line",
    data: [
      { x: 0, y: 60 },
      { x: 10000, y: 53 },
      { x: 20000, y: 65 },
      { x: 30000, y: 42 },
    ],
  },
];
