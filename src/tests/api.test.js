import { it, expect, describe } from "vitest";

import { GET } from "../pages/api/images/[id].js";

it("Throw 'Unknown Id' if id does not exist", async () => {
  const params = { id: "thisShouldFail" };
  const request = {};

  try {
    await GET({ params, request });
  } catch (e) {
    expect(e.message).toBe("Unknown Id");
  }
});

describe("Photo Data - /api/images/accountMessages", () => {
  it("Return Photo Data from API", async () => {
    const params = { id: "accountMessages" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    expect(data).toBeDefined();
  });

  it("Should have more than one data entry", async () => {
    const params = { id: "accountMessages" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();
    const dataLength = data.length;

    expect(dataLength).toBeGreaterThan(1);
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

describe("Photo Data - /api/images/techStackIcons", () => {
  it("Return Photo Data from API", async () => {
    const params = { id: "techStackIcons" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    expect(data).toBeDefined();
  });

  it("Should have more than one data entry", async () => {
    const params = { id: "techStackIcons" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();
    const dataLength = data.length;

    expect(dataLength).toBeGreaterThan(1);
  });

  it("Each data entry should contain a 'src'", async () => {
    const params = { id: "techStackIcons" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    data.forEach((element) => {
      expect(element.src).toBeTypeOf("string");
    });
  });

  it("Data should contain Alt text", async () => {
    const params = { id: "techStackIcons" };
    const request = {};

    const response = await GET({ params, request });
    const data = await response.json();

    data.forEach((element) => {
      expect(element.alt).toBeTypeOf("string");
    });
  });
});
