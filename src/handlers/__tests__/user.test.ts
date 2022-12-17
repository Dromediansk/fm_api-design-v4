import { createNewUser } from "../user";

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "user123", password: "hi" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    await createNewUser(req, res, () => {});
  });
});
