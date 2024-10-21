import { Handlers } from "$fresh/server.ts";
import { getChartSeries } from "../_providers/getChartSeries.ts";

export const handler: Handlers = {
  GET(_req) {
    const series = getChartSeries();
    const options = {
      chart: {
        type: "line",
        height: "100%",
        toolbar: { show: true },
      },
      series,
      xaxis: {
        type: "datetime",
        axisTicks: { show: true },
        range: 1000 * 60 * 5,
      },
      yaxis: [
        {
          opposite: true,
          title: {
            text: "Signal Strength (dBm)",
          },
          min: -150,
          max: -20,
        },
        {
          opposite: true,
          title: {
            text: "Wifi Latency (ms)",
          },
          forceNiceScale: true,
          min: 30,
          max: 200,
        },
      ],
      grid: {
        row: {
          colors: ["#f8f8f8", "transparent"],
        },
      },
      noData: { text: "Loading..." },
    };
    return new Response(JSON.stringify(options), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
