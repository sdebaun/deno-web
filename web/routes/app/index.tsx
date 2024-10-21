import { Panel } from "./_components/Panel.tsx";
import { DashChart } from "./_components/DashChart.tsx";
import Device from "./Device.tsx";
import LAN from "./LAN.tsx";
import WAN from "./WAN.tsx";

export default function DashPage() {
  return (
    <>
      <div class="flex flex-col px-4 py-4 gap-4 w-full h-full bg-[#EEEEEE]">
        <Panel cls="p-4">
          <DashChart/>
          {/* <Chart cls='bg-white p-4' /> */}
          {/* <AgChart /> */}
        </Panel>
        <div class="flex flex-row gap-4 w-full h-full">
          <div class="flex flex-col gap-4 w-full h-full justify-stretch">
            <Device />
            <WAN />
          </div>
          <LAN />
        </div>
      </div>
    </>
  );
}
