// Set NEXT_PUBLIC_SITE_URL to the deployed domain (no trailing slash).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "")
