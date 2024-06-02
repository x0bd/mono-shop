/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		POSTGRES_URL:
			"postgresql://neondb_owner:v8HxPGuh5ZlU@ep-summer-breeze-a5ws8aud-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
	},
};

export default nextConfig;
