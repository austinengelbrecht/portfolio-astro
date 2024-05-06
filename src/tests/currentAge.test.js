import { it, expect, describe } from "vitest";
import currentAge from "../js/currentAge";

describe("Calculate Current Age", () => {
  it("Should return a number", () => {
    const testYear = 1999;

    let act = currentAge(testYear);

    expect(act).toBeTypeOf("number");
  });

  it("Should calculate age correctly", () => {
    const testYear = 1999;
    const expectedAge = new Date().getFullYear() - testYear;

    let act = currentAge(testYear);

    expect(act).toBe(expectedAge);
  });
});
