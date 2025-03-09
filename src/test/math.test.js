import { describe, it, expect } from "vitest";
import { sum, divide } from "../math.js";

describe("Math functions", () => {
    it("should return the sum of two numbers", () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
    });

    it("should return the division of two numbers", () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(-6, 3)).toBe(-2);
    });

    it("should throw an error when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
});