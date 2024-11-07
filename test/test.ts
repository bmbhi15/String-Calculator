import assert from "assert";
import { add } from "../src";
describe("String Calculator", function () {
  //test cases with empty string
  it("Should be 0 for empty string", function () {
    assert.equal(add(""), 0);
  });

  //test cases with single 1 digit numbers
  it("Should be 0 for 0", function () {
    assert.equal(add("0"), 0);
  });
  it("Should be 1 for 1", function () {
    assert.equal(add("1"), 1);
  });
  it("Should be 2 for 2", function () {
    assert.equal(add("2"), 2);
  });

  it("Should be 3 for 3", function () {
    assert.equal(add("3"), 3);
  });

  it("Should be 4 for 4", function () {
    assert.equal(add("4"), 4);
  });

  it("Should be 5 for 5", function () {
    assert.equal(add("5"), 5);
  });
  it("Should be 6 for 6", function () {
    assert.equal(add("6"), 6);
  });
  it("Should be 7 for 7", function () {
    assert.equal(add("7"), 7);
  });
  it("Should be 8 for 8", function () {
    assert.equal(add("8"), 8);
  });
  it("Should be 9 for 9", function () {
    assert.equal(add("9"), 9);
  });

  //test cases with single 2 digit numbers
  it("Should be 10 for 10", function () {
    assert.equal(add("10"), 10);
  });
  it("Should be 11 for 11", function () {
    assert.equal(add("11"), 11);
  });
  it("Should be 12 for 12", function () {
    assert.equal(add("12"), 12);
  });
  it("Should be 13 for 13", function () {
    assert.equal(add("13"), 13);
  });
});
