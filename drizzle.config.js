import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/lib/server/ljh.schema.ts',
  out: 'drizzle',
  dbCredentials: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migration: {
    table: 'users',
    schema: 'usermanagement'
  },
  migrations: {
    table: 'users',
    schema: 'usermanagement'
  },
  schemaFilter: "usermanagement",
});