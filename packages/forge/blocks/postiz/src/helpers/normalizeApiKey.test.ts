import { describe, expect, it } from "bun:test";
import { normalizeApiKey } from "./normalizeApiKey";

describe("normalizeApiKey", () => {
  it("returns undefined for empty", () => {
    expect(normalizeApiKey(undefined)).toBeUndefined();
    expect(normalizeApiKey("")).toBeUndefined();
  });

  it("strips Bearer prefix", () => {
    expect(normalizeApiKey("Bearer abc123")).toBe("abc123");
    expect(normalizeApiKey("bearer abc123")).toBe("abc123");
  });

  it("keeps raw key", () => {
    expect(normalizeApiKey("abc123")).toBe("abc123");
  });
});
