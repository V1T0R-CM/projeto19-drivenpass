import { Notes } from "@prisma/client";

export type INoteData = Omit<Notes, "id">;
export type INoteBody = Omit<Notes, "id" | "accountId">