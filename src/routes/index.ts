// import { eq } from 'drizzle-orm';
// import { drizzle } from 'drizzle-orm/postgres-js';
// import { migrate } from 'drizzle-orm/postgres-js/migrator';
// import postgres from 'postgres';
// import * from '../lib/server/schema';

// const db = drizzle(client, { schema })

// await db.query.users.findMany(...);

// // Read
// // 사용자 조회 페이지네이션
// // 전체 사용자 조회
// const allUsers = await db.query.users.findMany();
// // 이메일 로그인 사용자 조회
// const userJoinEmail = await db.query.findMany({
//   where: eq(joinType.jointypeidx, 1)
//   limit: 10,
//   offset: 1,
//   columns: {
//     useridx: true,
//     name: true,
//     id: true,
//     createdDate: true,
//     joinType: true,
//   }
//   with: {
//     userType {
//   columns: {
//     userTypeName: true
//   }
// },
//   joinType {
//   columns: {
//     joinTypeName: true
//   }
// }
//   }
// })
// // 네이버 로그인 사용자 조회
// // 카카오 로그인 사용자 조회
// // 사용자 이름 검색

// // Create
// // 이메일 로그인 사용자 생성
// // 네이버 로그인 사용자 생성
// // 카카오 로그인 사용자 생성











// // for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), ...)

// // for query purposes
// const queryClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db");
// const db = drizzle(queryClient);
// await db.select().from(...)...