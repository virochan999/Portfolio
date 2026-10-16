import "dotenv/config"
import { defineConfig } from "prisma/config"

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    // Direct (non-pooled) connection is used by the Prisma CLI for migrations.
    url: process.env.POSTGRES_URL_NON_POOLING ?? "",
  },
})
