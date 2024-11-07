import assert from "assert";
import { add } from "../src";
describe("String Calculator", function () {
  it("Should be 0 for empty string", function () {
    assert.equal(add(""), 0);
  });
});
