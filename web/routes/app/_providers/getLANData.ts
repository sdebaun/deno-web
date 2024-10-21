import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

export type LANData = {
  clients: string[],
  wifi: string[],
  ethernet: string[],
};

export const getLANData = (): LANData => {
  const w = randomNumber({min: 1, max: 5}).toString()
  return {
    clients: [w],
    wifi: [w],
    ethernet: ["0"],
  };
};
