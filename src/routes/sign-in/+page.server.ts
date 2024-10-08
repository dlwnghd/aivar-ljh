import { fail, redirect } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { usersTable } from "$lib/server/schema";
import { eq } from "drizzle-orm";
import { createAuthJWT } from "$lib/server/jwt";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async (event) => {
  const token = event.cookies.get("aivar_ljh_auth_token");
  if (token && token !== "") {
    throw redirect(301, "/");
  }
  return {};
};

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const id = formData.get("id");
    const password = formData.get("password");

    if (!id || !password) {
      return fail(400, { error: "ID 혹은 비밀번호가 입력되지 않았습니다." });
    }

    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.userid, id.toString()))
      .limit(1);

    if (user.length === 0) {
      return fail(404, { error: "존재하지 않는 사용자입니다." });
    }

    const passwordIsRight = password.toString() === user[0].userpassword;

    if (!passwordIsRight) {
      return fail(400, { error: "비밀번호가 일치하지 않습니다." });
    }

    const token = await createAuthJWT({
      useridx: user[0].useridx,
      userid: user[0].userid,
      useremail: user[0].useremail,
      username: user[0].username,
    });

    event.cookies.set("aivar_ljh_auth_token", token, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    event.cookies.set("aivar_ljh_username", user[0].username, {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
    });

    throw redirect(301, "/");
  },
};