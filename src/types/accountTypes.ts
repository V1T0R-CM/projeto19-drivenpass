import { Account } from "@prisma/client";

export type IAccountData = Omit<Account, "id">;