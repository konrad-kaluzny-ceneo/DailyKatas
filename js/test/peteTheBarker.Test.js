const { assert } = require("chai");

function cakes(recipe, available) {
    const result = [];
    for (const key in recipe) {
        if (recipe.hasOwnProperty(key)) {
        const element = recipe[key];
        if (!available[key]) return 0;
        result.push(Math.floor(available[key] / element));
        }
    }
    return Math.min(...result);
}

describe("description example", function () {
  it("pass example tests", function () {
    let recipe = { flour: 500, sugar: 200, eggs: 1 };
    let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    assert.equal(cakes(recipe, available), 2);

    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    available = { sugar: 500, flour: 2000, milk: 2000 };
    assert.equal(cakes(recipe, available), 0);
  });
});
