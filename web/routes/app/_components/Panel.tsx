import classNames from "npm:classnames";
import type { PropsWithCommon } from "../../../PropsWithCommon.ts";
import type { ComponentChildren } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import { IconCircleSolid } from "../../../components/Icon.tsx";

type PanelProps =
  // Record<string, string>
  & PropsWithCommon<{ headerChildren?: ComponentChildren }>
  & PanelHeaderProps
  // & HTMLDivElement
  & {
    hxGet?: string,
    hxTrigger?: string,
    hxSwap?: string
  }


export const Panel = (
  { id, children, cls, name, headerChildren, hxGet, hxTrigger, hxSwap }: PanelProps,
) => (
  <div
    id={id}
    class={classNames("bg-[#E0E0E0] p-3 w-full h-full rounded shadow-md", cls)}
    hx-get={hxGet}
    hx-trigger={hxTrigger}
    hx-swap={hxSwap}
  >
    {name || headerChildren
      ? <PanelHeader name={name}>{headerChildren}</PanelHeader>
      : ""}
    <div class="grid grid-flow-row grid-cols-3 gap-3 2xl:grid-cols-3">
      {children}
    </div>
  </div>
);

type PanelHeaderProps = PropsWithCommon<{ name?: string }>;

const PanelHeader = ({ name, children }: PanelHeaderProps) => (
  <>
    <div class="flex flex-row w-full justify-between items-center">
      <div class="flex flex-row gap-4 items-center">
        <div>
          <IconCircleSolid fill={""} />
        </div>
        <h4 class="text-2xl text-[#585858] font-thin">{name}</h4>
      </div>
      {children}
    </div>
  </>
);
