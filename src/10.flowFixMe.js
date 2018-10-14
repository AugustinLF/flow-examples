// @flow
const arr = [1, "a", 2, "b"];

const wronglyTypedArray = arr.filter(el => typeof el === "number");
// flow errors here because it doesn't know how the array should be refined
// It's tempting to put the error here, but it's not the smartest thing to do.
// $FlowFixMe
const result: number = wronglyTypedArray.reduce(
  (total, current) => total + current
);

// flow doesn't understand the filter refinement. By forcing the cast here and muting the error
// we ensure that the rest of our program is correctly typed
// $FlowFixMe
const numArray: Array<number> = arr.filter(el => typeof el === "number");
const total: number = numArray.reduce((total, current) => total + current);
