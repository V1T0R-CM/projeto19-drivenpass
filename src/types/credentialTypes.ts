import { Credentials } from "@prisma/client";

export type ICredentialData = Omit<Credentials, "id">;
export type ICredentialBody = Omit<Credentials, "id" | "accountId">