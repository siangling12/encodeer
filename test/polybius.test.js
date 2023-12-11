const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");
describe("Checking if Polybius works properly", () => {
  it("Should, when encoding, translate the letters i and j to 42", () => {
  const actual = polybius("ij");
  const expected = "4242"
  expect(actual).to.eql(expected);
    });
  });
