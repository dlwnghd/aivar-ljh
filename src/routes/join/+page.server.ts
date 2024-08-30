import { usersTable } from "$lib/server/schema.js";
import { redirect } from "@sveltejs/kit";
import { createAuthJWT } from "$lib/server/jwt.js";

export const config = {
  runtime: "nodejs18.x",
};

export const load = async (event) => {
  const token = event.cookies.get("aivar_ljh_auth_token");

  if (token) {
    throw redirect(301, "/");
  }
};

export const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username") || "";
    const userid = formData.get("id") || "";
    const email = formData.get("email") || "";
    const password = formData.get("password") || "";
    const checkPassword = formData.get("checkPassword") || "";

    if (password !== checkPassword) {
      throw new Error("🚨비밀번호가 일치하지 않습니다.");
    }

    // GraphQL 요청을 위한 쿼리 문자열
    const query = `
      mutation {
        createUser(input: {
          username: "${username}",
          userid: "${userid}",
          useremail: "${email}",
          userpassword: "${password}"
        }) {
          useridx
          username
          useremail
        }
      }
    `;

    // GraphQL 서버에 요청 보내기 (서버 사이드에서 실행)
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();

    // 오류 처리
    if (result.errors) {
      throw new Error(result.errors.map((err: { message: any; }) => err.message).join(', '));
    }

    const nUser = result.data.createUser;

    // // 토큰 생성
    // const token = await createAuthJWT({
    //   useridx: nUser.useridx,
    //   id: nUser.userid,
    //   email: email.toString(),
    // });

    // event.cookies.set("aivar_ljh_auth_token", token, {
    //   path: "/",
    // });

    throw redirect(301, "/");
  },
};
