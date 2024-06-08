import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("🔴 Cannot find database url");
}

export default defineConfig({
  schema: "./lib/supabase/schema.ts",
  dialect: "postgresql",
  out: "./migrations",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
    database: "postgres",
    port: 5432,
    host: "aws-0-ap-south-1.pooler.supabase.com",
    user: "postgres.nhlmimaxdxnhsvzlyuqu",
    password: process.env.PW || "",
  },
});
