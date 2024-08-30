import { hashPassword } from '../../hook/password.js';
import { usersTable } from '$lib/server/schema.js';

export const resolvers = {
  Query: {
    users: async (_, __, { db, usersTable }) => {
      return await db.select().from(usersTable);
    },
  },
  Mutation: {
    createUser: async (_, { input }, { db, usersTable }) => {
      const hashedPassword = await hashPassword(input.userpassword); // await 추가
      const [newUser] = await db.insert(usersTable).values({
        usertypeidx: input.usertypeidx,
        jointypeidx: input.jointypeidx,
        username: input.username,
        userid: input.userid,
        useremail: input.useremail,
        userpassword: hashedPassword, // 해시된 비밀번호 사용
      }).returning();
      return newUser;
    },
  },
};