const shuffle = require("../src/shuffle");
let testArr = shuffle([2,4])
console.log(typeof testArr)

describe("shuffle should...", () => {
    test(`return a array`, () => {
      expect(Array.isArray(testArr)).toBe(true)
    })

    test('includes items', () => {
      expect(testArr.includes(2) && testArr.includes(4)).toBe(true)
    })
});
