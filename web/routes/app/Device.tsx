import type { RouteConfig } from "$fresh/server.ts";
import { Panel } from "./_components/Panel.tsx";
import { StatBlock } from "./_components/StatBlock.tsx";
import { getDeviceData } from "./_providers/getDeviceData.ts";

export const config: RouteConfig = {
  skipInheritedLayouts: true,
  skipAppWrapper: true,
};

export default function Device() {
  const { uptime, systemTime, heartbeat } = getDeviceData();

  return (
    <>
      <Panel
        id="Device"
        header={{ name: 'Device', children: <button>Reboot System</button> }}
        hxGet="/app/Device"
        hxTrigger="every 3s"
        hxSwap="outerHTML"
      >
        <StatBlock name="Uptime" pairs={uptime} />
        <StatBlock name="System Time" pairs={systemTime} />
        <StatBlock name="Heartbeat" pairs={heartbeat} />
      </Panel>
    </>
  );
}
