import { PageProps } from "$fresh/server.ts";
import { Button } from "../../components/Button.tsx";
import {
  IconChartBarSolid,
  IconCircleSolid,
  IconCog6ToothSolid,
  IconCpuChipSolid,
  IconGlobeAltOutline,
  IconHomeSolid,
} from "../../components/Icon.tsx";
import { Tab } from "../../components/Tab.tsx";
import classnames from "npm:classnames";

function AppBar({ cls }: { cls?: string }) {
  return (
    <>
      <div
        class={classnames(
          cls,
          "w-[240px] flex flex-col gap-6 h-full text-white items-center bg-gradient-to-b from-[#04428F] to-[#013192]",
        )}
      >
        <img
          class="p-6"
          src="https://solstarspace.com/wp-content/uploads/2022/07/Solstar-White-Reverse-Logo-Vector-01.png"
        />
        <div class="flex flex-col px-0 gap-6 w-full">
          <div class="text-lg flex flex-row gap-6 px-7 items-center">
            <IconCircleSolid cls="text-[#2D961D] size-4" />
            <div>
              PROTO-1
            </div>
          </div>
          <ul class="flex flex-col w-full items-stretch">
            <Tab cls="" Icon={IconHomeSolid}>Dashboard</Tab>
            <Tab cls="" Icon={IconCpuChipSolid}>Device</Tab>
            <Tab cls="" Icon={IconChartBarSolid}>LAN</Tab>
            <Tab cls="" Icon={IconGlobeAltOutline}>WAN</Tab>
            <Tab cls="" Icon={IconCog6ToothSolid}>Admin</Tab>
            <Button hx-delete="/">Sign Out</Button>
            {/* <button hx-delete="/api/auth/signin">Sign Out</button> */}
          </ul>
        </div>
      </div>
      <style>
        {`
    .active {
      background-color: #032A80;
      opacity: 100%;
      bg-[#032A80]
      opacity-100
    }
  `}
      </style>
    </>
  );
}

export default function Layout({ Component }: PageProps) {
  // state: if no authed user, kick them to the / (signin) route
  return (
    <div class="flex flex-row min-h-screen w-full bg-[#EFEFEF] font-sans">
      <AppBar x-idCls="id-toptab" x-hxTarget="#content" cls="min-h-screen" />
      <div id="content" class="grow">
        <Component />
      </div>
    </div>
  );
}
