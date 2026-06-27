/**
 * Array utility helpers
 */

// Split an array into sub-arrays of a given size
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// TODO: implement flatten — recursively flatten a nested array one level deep
function flatten(array) {
  throw new Error("Not implemented"); // left as an exercise
}

// Returns the unique values of an array
function unique(array) {
  return [...new Set(array)];
}

module.exports = { chunk, flatten, unique };
