// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $app_Device from "./routes/app/Device.tsx";
import * as $app_LAN from "./routes/app/LAN.tsx";
import * as $app_WAN from "./routes/app/WAN.tsx";
import * as $app_components_DashChart from "./routes/app/_components/DashChart.tsx";
import * as $app_components_PageTItle from "./routes/app/_components/PageTItle.tsx";
import * as $app_components_Panel from "./routes/app/_components/Panel.tsx";
import * as $app_components_StatBlock from "./routes/app/_components/StatBlock.tsx";
import * as $app_layout from "./routes/app/_layout.tsx";
import * as $app_middleware from "./routes/app/_middleware.ts";
import * as $app_providers_getChartSeries from "./routes/app/_providers/getChartSeries.ts";
import * as $app_providers_getDeviceData from "./routes/app/_providers/getDeviceData.ts";
import * as $app_providers_getLANData from "./routes/app/_providers/getLANData.ts";
import * as $app_providers_getWANData from "./routes/app/_providers/getWANData.ts";
import * as $app_chart_options from "./routes/app/chart/options.ts";
import * as $app_chart_update from "./routes/app/chart/update.ts";
import * as $app_index from "./routes/app/index.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/app/Device.tsx": $app_Device,
    "./routes/app/LAN.tsx": $app_LAN,
    "./routes/app/WAN.tsx": $app_WAN,
    "./routes/app/_components/DashChart.tsx": $app_components_DashChart,
    "./routes/app/_components/PageTItle.tsx": $app_components_PageTItle,
    "./routes/app/_components/Panel.tsx": $app_components_Panel,
    "./routes/app/_components/StatBlock.tsx": $app_components_StatBlock,
    "./routes/app/_layout.tsx": $app_layout,
    "./routes/app/_middleware.ts": $app_middleware,
    "./routes/app/_providers/getChartSeries.ts": $app_providers_getChartSeries,
    "./routes/app/_providers/getDeviceData.ts": $app_providers_getDeviceData,
    "./routes/app/_providers/getLANData.ts": $app_providers_getLANData,
    "./routes/app/_providers/getWANData.ts": $app_providers_getWANData,
    "./routes/app/chart/options.ts": $app_chart_options,
    "./routes/app/chart/update.ts": $app_chart_update,
    "./routes/app/index.tsx": $app_index,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
