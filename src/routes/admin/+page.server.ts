import { verifyAuthJWT } from "$lib/server/jwt.js";
import { redirect } from "@sveltejs/kit";

export const load = async (event) => {
  // get the sessionId from the cookie
  const token = event.cookies.get("aivar_ljh_auth_token");

  // if there is no sessionId, redirect to the sign-in page
  if (!token) {
    throw redirect(301, "/sign-in");
  }

  // return verifyAuthJWT(token);
};
