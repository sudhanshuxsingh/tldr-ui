import { config } from "dotenv";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

import { env } from "@/env/server";

config();

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
