const { chunk, flatten, unique } = require("./utils");

// chunk tests
console.assert(
  JSON.stringify(chunk([1, 2, 3, 4, 5], 2)) === "[[1,2],[3,4],[5]]",
  "chunk: basic split"
);
console.assert(
  JSON.stringify(chunk([], 2)) === "[]",
  "chunk: empty array"
);
console.assert(
  JSON.stringify(chunk([1, 2, 3], 5)) === "[[1,2,3]]",
  "chunk: size larger than array"
);

// flatten tests
console.assert(
  JSON.stringify(flatten([1, [2, 3], [4, [5]]])) === "[1,2,3,4,[5]]",
  "flatten: one level"
);
console.assert(
  JSON.stringify(flatten([])) === "[]",
  "flatten: empty array"
);

// unique tests
console.assert(
  JSON.stringify(unique([1, 2, 2, 3, 1])) === "[1,2,3]",
  "unique: removes duplicates"
);

console.log("All tests passed.");
