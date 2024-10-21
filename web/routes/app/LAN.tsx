import type { RouteConfig } from "$fresh/server.ts";
import { Panel } from "./_components/Panel.tsx";
import { StatBlock } from "./_components/StatBlock.tsx";
import { getLANData } from "./_providers/getLANData.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
  skipAppWrapper: true,
};

export default function LAN() {
  const { clients, wifi, ethernet } = getLANData()

  return (
    <>
      <Panel id="LAN" name="LAN" headerChildren={<button>Disable Wifi</button>}
        hxGet="/app/LAN"
        hxTrigger="every 3s"
        hxSwap="outerHTML"
        >
        <StatBlock name="Clients" pairs={clients} />
        <StatBlock name="Wifi" pairs={wifi} />
        <StatBlock name="Ethernet" pairs={ethernet} />
      </Panel>
    </>
  );
}
