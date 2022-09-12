import { Cards } from "@prisma/client";

export type ICardData = Omit<Cards, "id">;
export type ICardBody = Omit<Cards, "id" | "accountId">