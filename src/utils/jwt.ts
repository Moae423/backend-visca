import jwt from "jsonwebtoken";

const secret_key = process.env.jwt_secret_key || "asdasdasde412eqwdas";

export const generateToken = (payload: object) => {
  return jwt.sign(payload, secret_key, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret_key);
};
