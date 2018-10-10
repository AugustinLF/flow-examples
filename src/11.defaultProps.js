// @flow
import * as React from "react";

class TodoList extends React.Component<{ todos: Array<string> }> {
  static defaultProps = {
    todos: []
  };
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    );
  }
}

<TodoList />;
