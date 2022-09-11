import * as wifisRepositories from "../repositories/wifisRepositories.js";
import { getById as getUserById } from "../repositories/authRepositories.js";
import { IWifiData } from "../types/wifiTypes.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const CRRYPTR_SECRET_KEY = process.env.CRRYPTR_SECRET_KEY;
const cryptr = new Cryptr(CRRYPTR_SECRET_KEY);

export async function createWifi(wifiData: IWifiData) {
    await wifisRepositories.insert({ ...wifiData, password: cryptr.encrypt(wifiData.password) });
}

export async function getAllWifisById(accountId: number) {
    const user = await getUserById(accountId);
    let result: IWifiData[];

    if (!user) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma conta" };

    result = await wifisRepositories.getAllById(accountId);

    return result.map(wifi => {
        delete wifi["accountId"];

        return { ...wifi, password: cryptr.decrypt(wifi.password) }
    })
}

export async function getWifiById(wifiId: number, accountId: number) {
    const wifi = await wifisRepositories.getById(wifiId);

    if (!wifi) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (wifi.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    delete wifi["accountId"];

    return { ...wifi, password: cryptr.decrypt(wifi.password) }
}

export async function deleteWifiById(wifiId: number, accountId: number) {
    const wifi = await wifisRepositories.getById(wifiId);

    if (!wifi) throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
    if (wifi.accountId !== accountId) throw { code: "Unauthorized", message: "Token invalido" };

    await wifisRepositories.deleteById(wifiId);
}