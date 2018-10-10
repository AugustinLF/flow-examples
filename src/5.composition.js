// @flow
type Person = { age: number };
type SpreadPerson = { ...Person };
type ExactSpreadPerson = { ...$Exact<Person> };

const spreadPerson: SpreadPerson = { age: 1 };
const exactSpreadPerson: ExactSpreadPerson = { age: 1 };

// $FlowFixMe age is a maybe string (?string) in SpreadPerson
const age: number = spreadPerson.age;
const maybeAge: ?number = spreadPerson.age;
const correctAge: number = exactSpreadPerson.age;

type Intersection = {| a: number |} & {| b: string |};
// $FlowFixMe It's not possible to be exactly these two types
const a: Intersection = { a: 1, b: "string" };
