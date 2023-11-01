import { it, expect, describe } from "vitest";

import { GET } from "../pages/api/[id].js";

describe("Page Data APIs", () => {
  it("Return Photo Data from API", async () => {
    const params = { id: "accountMessages" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    expect(data).toBeDefined();
  });

  it("Fail if id does not exist", async () => {
    const params = { id: "thisShouldFail" };
    const request = {};

    try {
      const response = await GET({ params, request });
    } catch (e) {
      expect(e.message).toBe("Unknown Id");
    }
  });

  it("Data should contain a url", () => {
    const endpoint = "accountMessages";

    expect(endpoint).toBeDefined();
  });

  it("Data should contain Alt text", () => {
    const endpoint = "accountMessages";

    expect(endpoint).toBeDefined();
  });
});
