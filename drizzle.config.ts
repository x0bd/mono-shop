import { defineConfig, type Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default defineConfig({
	schema: "./server/schema.ts",
	out: "./server/drizzle",
	dialect: "postgresql",
	driver: "pg",
	dbCredentials: {
		url: process.env.POSTGRES_URL as string,
	},
} as Config);
