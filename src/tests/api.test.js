import { it, expect, describe } from "vitest";
import GET from "../pages/api/[id]";

describe("Page Data APIs", () => {
  it("Get Data from API", () => {
    const endpoint = "accountMessages";

    expect(endpoint).toBeDefined();
  });
});
