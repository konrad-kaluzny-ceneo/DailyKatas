const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        const num1 = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
        const num2 = numbers[j];
        if (num1 + num2 === target) return [i, j];
        }
    }
}

describe("Sample Tests", function () {
  const testCases = [
    [[1, 2, 3], 4, [0, 2]],
    [[1234, 5678, 9012], 14690, [1, 2]],
    [[2, 2, 3], 4, [0, 1]],
    [[2, 3, 1], 4, [1, 2]],
  ];
  for (const [numbers, target, expected] of testCases)
    it(`Testing for numbers = [${numbers.join(
      ", "
    )}], target = ${target}`, () => check(numbers, target, expected));

  const numericalCompare = (a, b) => a - b;
  function check(arr, target, expected) {
    actual = twoSum(arr.slice(), target);
    assert.isArray(actual);
    assert.deepEqual(actual.sort(numericalCompare), expected);
  }
});
