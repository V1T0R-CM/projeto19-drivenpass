var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as credentialsRepositories from "../repositories/credentialsRepositories.js";
import { getById as getUserById } from "../repositories/authRepositories.js";
import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();
var CRRYPTR_SECRET_KEY = process.env.CRRYPTR_SECRET_KEY;
var cryptr = new Cryptr(CRRYPTR_SECRET_KEY);
export function createCredential(credentialData) {
    return __awaiter(this, void 0, void 0, function () {
        var existingTitle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, credentialsRepositories.getByTitleAndId(credentialData.accountId, credentialData.credentialTitle)];
                case 1:
                    existingTitle = _a.sent();
                    if (existingTitle)
                        throw { code: "Conflict", message: "Esse titulo já existe" };
                    return [4 /*yield*/, credentialsRepositories.insert(__assign(__assign({}, credentialData), { password: cryptr.encrypt(credentialData.password) }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
export function getAllCredentialsById(accountId) {
    return __awaiter(this, void 0, void 0, function () {
        var user, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserById(accountId)];
                case 1:
                    user = _a.sent();
                    if (!user)
                        throw { code: "NotFound", message: "Esse id não corresponde a nenhuma conta" };
                    return [4 /*yield*/, credentialsRepositories.getAllById(accountId)];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.map(function (credential) {
                            delete credential["accountId"];
                            return __assign(__assign({}, credential), { password: cryptr.decrypt(credential.password) });
                        })];
            }
        });
    });
}
export function getCredentialById(credentialId, accountId) {
    return __awaiter(this, void 0, void 0, function () {
        var credential;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, credentialsRepositories.getById(credentialId)];
                case 1:
                    credential = _a.sent();
                    if (!credential)
                        throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
                    if (credential.accountId !== accountId)
                        throw { code: "Unauthorized", message: "Token invalido" };
                    delete credential["accountId"];
                    return [2 /*return*/, __assign(__assign({}, credential), { password: cryptr.decrypt(credential.password) })];
            }
        });
    });
}
export function deleteCredentialById(credentialId, accountId) {
    return __awaiter(this, void 0, void 0, function () {
        var credential;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, credentialsRepositories.getById(credentialId)];
                case 1:
                    credential = _a.sent();
                    if (!credential)
                        throw { code: "NotFound", message: "Esse id não corresponde a nenhuma credencial" };
                    if (credential.accountId !== accountId)
                        throw { code: "Unauthorized", message: "Token invalido" };
                    return [4 /*yield*/, credentialsRepositories.deleteById(credentialId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
