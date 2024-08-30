import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import dotenv from 'dotenv';
dotenv.config();

const dbPort = process.env.DB_PORT;

if (!dbPort) {
  throw new Error("DB_POST 환경 변수가 설정되지 않았습니다.");
}

const port = parseInt(dbPort, 10);
if (isNaN(port)) {
  throw new Error(`Invalid DB_POST: ${dbPort}`);
}

const client = new pg.Pool({
  host: process.env.DB_HOST,
  port: port,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// DB 연결
async function connectDB() {
  try {
    await client.connect();
    console.log("✅DB 연결 성공!");
  } catch (err) {
    console.error("🚨DB 연결 실패:", err);
    process.exit(1); // 연결 실패 시 프로세스 종료
  }
}

// drizzle DB에 액세스
export const db = drizzle(client);

// DB 연결
await connectDB();

// 서버 종료 시 클라이언트 종료
process.on('SIGINT', async () => {
  await client.end();
  console.log("DB 연결 종료");
  process.exit(0);
});
