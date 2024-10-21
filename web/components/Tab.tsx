import type { FunctionalComponent } from "https://esm.sh/v128/preact@10.22.0/src/index.d.ts";
import type { ComponentChildren } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import classnames from "npm:classnames";
import type { IconProps } from "./Icon.tsx";

const tabCls = `
  px-6 py-3
  flex flex-row gap-4
  text-white
  opacity-80
  hover:bg-[#032A80]
  hover:opacity-100
  cursor-pointer
`;

const tabLabelCls = `
  text-xl font-thin
  font-['Montserrat']
`;

export interface TabProps {
  cls?: string;
  children: ComponentChildren;
  Icon: FunctionalComponent<IconProps>;
}

export const Tab = ({ children, cls, Icon }: TabProps) => (
  <li class={classnames(tabCls, cls)}>
    <Icon />
    <div class={tabLabelCls}>{children}</div>
  </li>
);
