/**
 * Kawie Digital Solutions website — App Version (Company SOP)
 *
 * Format: v{MAJOR}-{DDMMYY}.{HHMM}
 *   - MAJOR: manual bump for breaking releases (set in next.config.mjs)
 *   - DDMMYY / HHMM: build timestamp in Malaysia time (Asia/Kuala_Lumpur, 24h)
 *
 * NEXT_PUBLIC_APP_VERSION is computed at build time in next.config.mjs and
 * injected automatically on every production build / dev server start.
 * Never set NEXT_PUBLIC_APP_VERSION manually in .env files.
 */

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? 'v1-dev'
