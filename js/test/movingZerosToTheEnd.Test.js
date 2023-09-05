const { assert, config } = require("chai");
config.truncateThreshold = 0;

function moveZeros(arr) {
    const result = [];
    const zeros = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element === 0) {
        zeros.push(element);
        } else {
        result.push(element);
        }
    }
    return result.concat(zeros);
}

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(
      moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
      [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
    );
  });
});
