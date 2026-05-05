/**
 * Simple Function Context
 * In non-strict mode, 'this' refers to the global object.
 */
function test() {
  console.log("Function this:", this);
}

test();
