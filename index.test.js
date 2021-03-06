const { describe, it, expect, matchers } = require("./index");

function add(a, b) {
  return a + b;
}

describe("add", () => {
  it("adds two numbers", () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
});

function subtract(a, b) {
  return a - b;
}

describe("subtract", () => {
  it("subtract two numbers", () => {
    const result = subtract(2, 1);
    expect(result).toBe(1);
  });
});

function divide(a, b) {
  return a / b;
}
describe("Divide", () => {
  it("Divide two numbers", () => {
    const result = divide(1, 1);
    expect(result).toBe(1);
  });
});

function multiply(a, b) {
  return a / b;
}
describe("Multiply", () => {
  it("multiply two numbers", () => {
    const result = multiply(2, 1);
    expect(result).toBe(2);
  });
});
