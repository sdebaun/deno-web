import type { PropsWithCommon } from "../../../PropsWithCommon.ts";

type StatsBlockProps = PropsWithCommon<{
  name: string;
  pairs?: string[];
}>;

export const StatBlock = ({ name, pairs = ["N/A"] }: StatsBlockProps) => (
  <div class="flex flex-col bg-white w-full p-3 gap-3">
    <div class="font-light">{name}</div>
    <div class="flex flex-row gap-0 items-end">
      {pairs.map((s, idx) =>
        idx % 2 === 0
          ? <div class="text-xl pr-[2px]">{s}</div>
          : <div class="text-sm text-[#585858] pb-[2px] pr-2">{s}</div>
      )}
    </div>
  </div>
);
