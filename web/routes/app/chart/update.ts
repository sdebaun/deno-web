import { Handlers } from "$fresh/server.ts";
import { getChartSeries } from "../_providers/getChartSeries.ts";

export const handler: Handlers = {
  GET(_req) {
    const series = getChartSeries();
    return new Response(JSON.stringify(series), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
