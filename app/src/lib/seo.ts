const fallbackSiteUrl = "http://localhost:3000";

export const siteUrl = (): string =>
  (import.meta.env.VITE_SITE_URL || fallbackSiteUrl).replace(/\/$/, "");
