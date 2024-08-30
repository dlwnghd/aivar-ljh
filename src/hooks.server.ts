import type { Handle } from "@sveltejs/kit";
import { db } from "$lib/server/db";
import { sql } from "drizzle-orm";

export const handle: Handle = async ({ event, resolve }) => {
  // 데이터베이스 연결 테스트
  try {
    await db.execute(sql`SELECT 1`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }

  const response = await resolve(event);
  return response;
};