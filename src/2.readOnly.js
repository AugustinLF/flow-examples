// @flow
type Person = {
  age: string
};

const deleteAge = (maybeAgePerson: { age: ?string }) => {
  maybeAgePerson.age = null;
};
const printAge = (maybeAgePerson: { +age: ?string }) => {
  console.log(maybeAgePerson.age);
};
const person: Person = { age: "one yo" };

// $FlowFixMe deleteAge can make age null, which breaks the Person contract
deleteAge(person);
printAge(person);
