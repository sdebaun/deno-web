import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

export type WANData = {
  signalStrength: string[];
  latency: string[];
  packetLoss: string[];
};

export const getWANData = (): WANData => {
  return {
    signalStrength: ["11234", "xz"],
    latency: [randomNumber({ min: 200, max: 300 }).toString(), "ms"],
    packetLoss: [randomNumber({ min: 0, max: 10 }).toString(), "%"],
  };
};
