const { assert } = require("chai");

function order(words){
    if (words === "") return "";
    const arr = words.split(" ");
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const index = element.match(/\d/)[0];
        result[index - 1] = element;
    }
    return result.join(" ");
}

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.strictEqual(
      order("4of Fo1r pe6ople g3ood th5e the2"),
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
    assert.strictEqual(order(""), "", "empty input should return empty string");
  });
});
