import type { ComponentChildren } from "https://esm.sh/v128/preact@10.22.0/src/index.js";

export type PropsWithCommon<P = {}> = P & {
  id?: string;
  cls?: string;
  children?: ComponentChildren;
};
