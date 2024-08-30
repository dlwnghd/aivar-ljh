import { integer, serial, text, pgTable, timestamp, pgSchema, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// 스키마 정의
export const userManagementSchema = pgSchema("usermanagement");

// 사용자 테이블
export const usersTable = userManagementSchema.table("users", {
  useridx: serial('useridx').primaryKey(),
  usertypeidx: integer("usertypeidx").references(() => usertypesTable.usertypeidx),
  jointypeidx: integer("jointypeidx").references(() => jointypesTable.jointypeidx),
  username: text('username').notNull(),
  userid: text('userid').notNull(),
  useremail: text('useremail').notNull(),
  userpassword: text('userpassword').notNull(),
  usercreatedat: timestamp('usercreatedat').defaultNow(),
});

// 사용자 타입 테이블
export const usertypesTable = userManagementSchema.table("usertypes", {
  usertypeidx: serial("usertypeidx").primaryKey(),
  usertypename: text("usertypename").notNull(),
});

// 회원가입 타입 테이블
export const jointypesTable = userManagementSchema.table("jointypes", {
  jointypeidx: serial("jointypeidx").primaryKey(),
  jointypename: text("jointypename").notNull(),
});

// 사용자/회원가입 타입 관계도
export const userRelations = relations(usersTable, ({ one }) => ({
  usertypesTable: one(usertypesTable, {
    fields: [usersTable.usertypeidx],
    references: [usertypesTable.usertypeidx],
  }),
  joinType: one(jointypesTable, {
    fields: [usersTable.jointypeidx],
    references: [jointypesTable.jointypeidx],
  }),
}));

// 세션 테이블
export const sessionsTable = userManagementSchema.table("sessions", {
  sessionidx: serial("sessionidx").primaryKey(),
  sessiontoken: text("sessiontoken").notNull(),
  userid: text("userid").notNull(),
  sessionexpiry: timestamp("sessionexpiry", {
    withTimezone: true,
    mode: "date"
  }).notNull()
});

// 인증 토큰 테이블
export const verificationtokenTable = userManagementSchema.table("verificationtoken", {
  identifier: varchar("identifier").notNull(),
  token: varchar("token").notNull(),
  tokenexpireat: timestamp("tokenexpireat", {
    withTimezone: false,
    mode: "date"
  }).notNull(),
});

export interface DatabaseUser {
  useridx: number;
  usertypeidx: number;
  jointypeidx: number;
  username: string;
  userid: string;
  useremail: string;
  userpassword: string;
  usercreatedat: Date;
}