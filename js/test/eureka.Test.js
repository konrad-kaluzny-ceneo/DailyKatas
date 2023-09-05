const chai = require("chai");
const assert = chai.assert;

function sumDigPow(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        if (isEureka(i)) {
        result.push(i);
        }
    }
    return result;
}

function isEureka(num) {
    const arr = num.toString().split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += Math.pow(element, i + 1);
    }
    return sum === num;
}

describe("Tests", function () {
  it("Fixed tests", function () {
    assert.deepEqual(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
    assert.deepEqual(sumDigPow(10, 100), [89]);
    assert.deepEqual(sumDigPow(90, 100), []);
    assert.deepEqual(sumDigPow(90, 150), [135]);
    assert.deepEqual(sumDigPow(50, 150), [89, 135]);
    assert.deepEqual(sumDigPow(10, 150), [89, 135]);
  });
});
