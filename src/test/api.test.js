import { describe, it, expect, vi } from "vitest";
import { fetchData, getUser } from "src/api.js";

describe("Asynchronous functions", () => {
    it("should return mocked data", async () => {
        const data = await fetchData();
        expect(data).toEqual({ data: "Mocked data response" });
    });

    it("should fetch user data from API", async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ id: 1, name: "John Doe", email: "john@example.com" }),
            })
        );

        const user = await getUser(1);
        expect(user).toEqual({ id: 1, name: "John Doe", email: "john@example.com" });

        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users/1");
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it("should throw an error if user is not found", async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: false,
            })
        );

        await expect(getUser(999)).rejects.toThrow("User not found");
    });
});
