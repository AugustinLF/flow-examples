// @flow
const people: Array<string> = ["jane", "john"];
const deletePeople = (people: Array<?string>) => {
  people[0] = null;
};
const printPeople = (people: $ReadOnlyArray<?string>) => {
  console.log(people);
};
// deletePeople accepting maybe strings,
//we need to make sure that it won't modify the array
// $FlowFixMe
deletePeople(people);
printPeople(people);
