import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

export type DeviceData = {
  uptime: string[];
  systemTime: string[];
  heartbeat: string[];
};

export const getDeviceData = (): DeviceData => {
  return {
    uptime: ["0", "d", "12", "h", "33", "m"],
    systemTime: ["11:34", "19", "Oct"],
    heartbeat: [randomNumber({ min: 2, max: 5 }).toString(), "s"],
  };
};
