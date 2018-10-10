// @flow

const arr = [1, "a", 2, "b"];
// $FlowFixMe flow doesn't understand the filter refinement
const numArray: Array<number> = arr.filter(
  element => typeof element === "number"
);

const total: number = numArray.reduce((total, current) => total + current);
