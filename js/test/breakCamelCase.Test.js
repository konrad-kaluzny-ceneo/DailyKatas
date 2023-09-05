const chai = require("chai");
const assert = chai.assert;

// complete the function
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(
      solution("camelCasing"),
      "camel Casing",
      "Unexpected result"
    );
    assert.strictEqual(
      solution("camelCasingTest"),
      "camel Casing Test",
      "Unexpected result"
    );
  });
});
