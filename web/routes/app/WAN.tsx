import type { RouteConfig } from "$fresh/server.ts";
import { Panel } from "./_components/Panel.tsx";
import { StatBlock } from "./_components/StatBlock.tsx";
import { getWANData } from "./_providers/getWANData.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
  skipAppWrapper: true,
};

export default function WAN() {
  const { signalStrength, latency, packetLoss } = getWANData();

  return (
    <>
      <Panel
        id="WAN"
        header={{ name: 'WAN', children: <button>Reboot Modem</button> }}
        hxGet="/app/WAN"
        hxTrigger="every 3s"
        hxSwap="outerHTML"
      >
        <StatBlock name="Signal Strength" pairs={signalStrength} />
        <StatBlock name="Latency" pairs={latency} />
        <StatBlock name="Packet Loss" pairs={packetLoss} />
      </Panel>
    </>
  );
}
