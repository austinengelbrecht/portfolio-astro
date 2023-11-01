import { it, expect, describe } from "vitest";

import { GET } from "../pages/api/[id].js";

describe("Photo Data - /api/accountMessages", () => {
  it("Return Photo Data from API", async () => {
    const params = { id: "accountMessages" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    expect(data).toBeDefined();
  });

  it("Throw 'Unknown Id' if id does not exist", async () => {
    const params = { id: "thisShouldFail" };
    const request = {};

    try {
      await GET({ params, request });
    } catch (e) {
      expect(e.message).toBe("Unknown Id");
    }
  });

  it("Each data entry should contain a 'src'", async () => {
    const params = { id: "accountMessages" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    data.forEach((element) => {
      expect(element.src).toBeTypeOf("string");
    });
  });

  it("Data should contain Alt text", async () => {
    const params = { id: "accountMessages" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    data.forEach((element) => {
      expect(element.alt).toBeTypeOf("string");
    });
  });
});
