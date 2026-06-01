export const COMPANY_EMAIL_PRIMARY = "admin@kawie-digital.com"

export const COMPANY_EMAIL_INQUIRY = "inquiry@kawie-digital.com"

export const COMPANY_EMAILS = [COMPANY_EMAIL_PRIMARY, COMPANY_EMAIL_INQUIRY] as const

export const COMPANY_ADDRESS_LINES = [
  "03-12A Kenwingston,",
  "Business Centre Persiaran,",
  "Bestari Cyber 9 Cyberjaya,",
  "63000 Sepang, Selangor.",
] as const

export const COMPANY_ADDRESS_SINGLE_LINE = COMPANY_ADDRESS_LINES.join(" ")
