import { prisma } from "../config/database.js"
import { IWifiData } from "../types/wifiTypes.js";

export async function insert(wifiData: IWifiData) {
    await prisma.wifis.create({ data: wifiData });
}

export async function getAllById(accountId: number) {
    const result = await prisma.wifis.findMany({ where: { accountId: accountId } });
    return result
}

export async function getById(wifiId: number) {
    const result = await prisma.wifis.findUnique({ where: { id: wifiId } });
    return result
}

export async function deleteById(wifiId: number) {
    await prisma.wifis.delete({ where: { id: wifiId } });
}