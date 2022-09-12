import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
export function generateToken(id, email) {
    try {
        var jwtSecretKey = process.env.JWT_SECRET_KEY;
        return jwt.sign({ id: id, email: email }, jwtSecretKey, { expiresIn: "1d" });
    }
    catch (_a) {
        return false;
    }
}
export function validateToken(token) {
    try {
        var jwtSecretKey = process.env.JWT_SECRET_KEY;
        return jwt.verify(token, jwtSecretKey);
    }
    catch (_a) {
        return false;
    }
}
