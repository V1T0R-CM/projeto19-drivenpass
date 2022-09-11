import { Wifis } from "@prisma/client";

export type IWifiData = Omit<Wifis, "id">;
export type IWifiBody = Omit<Wifis, "id" | "accountId">