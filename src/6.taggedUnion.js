// @flow
type Action =
  | { type: "ADD_TODO", payload: string }
  | { type: "REMOVE_TODO", payload: number };
const reducer = (state: Object, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      const text: string = action.payload;
      break;
    case "REMOVE_TODO":
      const int: number = action.payload;
      break;
    default:
      // Cool trick to ensure that you handled all the types of actions
      const empty: empty = action;
  }
};
