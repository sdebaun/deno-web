import classNames from "npm:classnames";
import type { PropsWithCommon } from "../../../PropsWithCommon.ts";
import { IconCircleSolid } from "../../../components/Icon.tsx";

type PanelProps =
  & PropsWithCommon<{ header?: PanelHeaderProps }>
  & {
    hxGet?: string;
    hxTrigger?: string;
    hxSwap?: string;
    innerCls?: string;
  };

export const Panel = (
  {
    id,
    children,
    cls,
    innerCls,
    header,
    hxGet,
    hxTrigger,
    hxSwap,
  }: PanelProps,
) => (
  <div
    id={id}
    class={classNames("bg-[#E0E0E0] p-3 w-full h-full rounded shadow-md", cls)}
    hx-get={hxGet}
    hx-trigger={hxTrigger}
    hx-swap={hxSwap}
  >
    {header && (header.name || header.children)
      ? <PanelHeader name={header.name}>{header.children}</PanelHeader>
      : ""}
    <div
      class={classNames(
        "grid grid-flow-row grid-cols-3 gap-3 2xl:grid-cols-3",
        innerCls,
      )}
    >
      {children}
    </div>
  </div>
);

type PanelHeaderProps = PropsWithCommon<{ name?: string }>;

const PanelHeader = ({ name, children }: PanelHeaderProps) => (
  <>
    <div class="flex flex-row w-full justify-between items-center pb-2">
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
