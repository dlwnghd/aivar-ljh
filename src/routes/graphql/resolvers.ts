import { usersTable } from '$lib/server/schema.js';

export const resolvers = {
  Query: {
    users: async (_, __, { db, usersTable }) => {
      return await db.select().from(usersTable);
    },
  },
  Mutation: {
    createUser: async (_, { input }, { db, usersTable }) => {
      const [newUser] = await db.insert(usersTable).values({
        usertypeidx: input.usertypeidx,
        jointypeidx: input.jointypeidx,
        username: input.username,
        userid: input.userid,
        useremail: input.useremail,
        userpassword: userpassword,
      }).returning();
      return newUser;
    },
  },
};