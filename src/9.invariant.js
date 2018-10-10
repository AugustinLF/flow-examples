// @flow
const maybeString: ?string = "a";

// It's not perfect, some wrong conditions will still mute the errors
// But it's
if (typeof maybeString !== "string")
  throw new Error("maybeString should be defined");
console.log(`${maybeString}`);

const invariant = (condition: mixed, error: string) => {
  if (!condition) console.error(error);
};
const maybeNumber: ?number = 1;
invariant(typeof maybeNumber === "number", "maybeNumber should be defined");
const n: number = maybeNumber;
