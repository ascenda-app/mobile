import { afterEach, describe, expect, it, vi } from "vitest";
import { siteUrl } from "./seo";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("siteUrl", () => {
  it("siteUrl_withoutConfiguration_fallsBackToTheProductionDomain", () => {
    expect(siteUrl()).toBe("http://localhost:3000");
  });

  it("siteUrl_emptyVariable_fallsBackToTheProductionDomain", () => {
    vi.stubEnv("VITE_SITE_URL", "");

    expect(siteUrl()).toBe("http://localhost:3000");
  });

  it("siteUrl_configuredDomain_isUsed", () => {
    vi.stubEnv("VITE_SITE_URL", "https://staging.localhost");

    expect(siteUrl()).toBe("https://staging.localhost");
  });

  it("siteUrl_trailingSlash_isStripped", () => {
    vi.stubEnv("VITE_SITE_URL", "http://localhost:3000/");

    expect(siteUrl()).toBe("http://localhost:3000");
  });
});
