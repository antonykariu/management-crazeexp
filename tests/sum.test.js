const { expect } = require("@jest/globals");
const sum = require("./sum");

test("adds 1 + 5 equals 6", () => {
  expect(sum(1, 5)).toBe(6);
});
