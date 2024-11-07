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

  it("Should be 42 for 42", function () {
    assert.equal(add("42"), 42);
  });
  it("Should be 99 for 99", function () {
    assert.equal(add("99"), 99);
  });

  // test cases with 3 digit numbers
  it("Should be 100 for 100", function () {
    assert.equal(add("100"), 100);
  });
  it("Should be 456 for 456", function () {
    assert.equal(add("456"), 456);
  });
  it("Should be 789 for 789", function () {
    assert.equal(add("789"), 789);
  });

  // test cases with 5 digit numbers
  it("Should be 12345 for 12345", function () {
    assert.equal(add("12345"), 12345);
  });
  it("Should be 54321 for 54321", function () {
    assert.equal(add("54321"), 54321);
  });
  it("Should be 98765 for 98765", function () {
    assert.equal(add("98765"), 98765);
  });

  // test cases with 2 numbers, both single digit
  it("Should be 3 for 1,2", function () {
    assert.equal(add("1,2"), 3);
  });
  it("Should be 9 for 5,4", function () {
    assert.equal(add("5,4"), 9);
  });
  it("Should be 10 for 6,4", function () {
    assert.equal(add("6,4"), 10);
  });

  // test cases with 2 numbers, with multiple digits
  it("Should be 12 for 1,11", function () {
    assert.equal(add("1,11"), 12);
  });
  it("Should be 100 for 50,50", function () {
    assert.equal(add("50,50"), 100);
  });
  it("Should be 1000 for 100,900", function () {
    assert.equal(add("100,900"), 1000);
  });

  // test cases with 3 numbers, with multiple digits
  it("Should be 100 for 10,20,70", function () {
    assert.equal(add("10,20,70"), 100);
  });
  it("Should be 1000 for 100,200,700", function () {
    assert.equal(add("100,200,700"), 1000);
  });
  it("Should be 10000 for 1000,2000,7000", function () {
    assert.equal(add("1000,2000,7000"), 10000);
  });

  // test cases with multiple numbers, with multiple digits
  it("Should be 100 for 10,20,30,40", function () {
    assert.equal(add("10,20,30,40"), 100);
  });
  it("Should be 1000 for 100,200,300,400", function () {
    assert.equal(add("100,200,300,400"), 1000);
  });
  it("Should be 10000 for 1000,2000,3000,4000", function () {
    assert.equal(add("1000,2000,3000,4000"), 10000);
  });
  it("Should be 100000 for 10000,20000,30000,40000", function () {
    assert.equal(add("10000,20000,30000,40000"), 100000);
  });
});
