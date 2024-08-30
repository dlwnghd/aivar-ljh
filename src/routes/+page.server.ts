import { usersTable } from '$lib/db/schema.js';
import { db } from '$lib/server/db.js';
import { verifyAuthJWT } from '$lib/server/jwt.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, fetch }) => {
  // 로그인 확인
  const token = cookies.get("aivar_ljh_auth_token");
  if (!token) {
    throw redirect(301, "/sign-in");
  }

  const username = cookies.get("aivar_ljh_username");

  const userPayload = await verifyAuthJWT(token);

  const query = `
    
  `

  const userList = await db
    .select({
      useridx: usersTable.useridx,
      userid: usersTable.userid,
      useremail: usersTable.useremail,
      username: usersTable.username,
      jointypeidx: usersTable.jointypeidx,
    })
    .from(usersTable);
  return { userList, username };
};