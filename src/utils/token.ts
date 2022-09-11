import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function generateToken(id: number, email: string) {
    try {
        const jwtSecretKey: string | any = process.env.JWT_SECRET_KEY;
        return jwt.sign({ id: id, email: email }, jwtSecretKey, { expiresIn: "1d" });
    }
    catch {
        return false
    }
}

export function validateToken(token: string) {
    try {
        const jwtSecretKey: string | any = process.env.JWT_SECRET_KEY;
        return jwt.verify(token, jwtSecretKey);
    }
    catch {
        return false
    }
}