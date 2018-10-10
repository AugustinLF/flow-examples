// @flow
import * as React from "react";
const injectBreakpoint = BaseComponent =>
  class BreakPointInjector extends React.Component<*> {
    render() {
      return <BaseComponent {...this.props} breakpoint="medium" />;
    }
  };

type TodoProps = {
  content: string,
  breakpoint: string
};
const Todo = ({ content, breakpoint }: TodoProps) => (
  <div>{breakpoint === "medium" ? content.toUpperCase() : content}</div>
);
const WrappedTodo: React.ComponentType<{ content: string }> = injectBreakpoint(
  Todo
);

// $FlowFixMe thanks to the annotation, flow works correctly
<WrappedTodo />;
