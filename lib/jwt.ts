// import { jwtVerify } from "jose";
import jwt from "jsonwebtoken";

export const isTokenExpired = (token: string) => {
  if (!token) return true;

  try {
    const decoded = jwt.decode(token) as { exp: number };
    if (!decoded || !decoded.exp) {
      return true;
    }
    const currentTime = new Date().getTime() / 1000;

    return decoded.exp < currentTime;
  } catch (error) {
    console.error("Error checking token expiration", error);
    return true;
  }
};

// export async function isTokenExpired(token: string): Promise<boolean> {
//   try {
//     const encoder = new TextEncoder();
//     const secretKey = encoder.encode(JWT_SECRET);

//     const { payload } = await jwtVerify(token, secretKey);

//     if (!payload || typeof payload.exp !== "number") {
//       return true;
//     }

//     const currentTime = Math.floor(Date.now() / 1000);
//     return payload.exp < currentTime;
//   } catch (error) {
//     console.error("Error verifying token or checking expiration", error);
//     return true;
//   }
// }
