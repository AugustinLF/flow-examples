// @flow
import * as React from "react";

type Props<T> = {
  children: (model: T) => React.Node,
  initialData: T,
  validate: (model: T) => boolean
};
class Form<T> extends React.Component<Props<T>> {
  render() {
    const { children, initialData } = this.props;
    return children(initialData);
  }
}

type Model = {
  firstName: string
};
const validate = model => {
  console.log(model.firstName);
  // $FlowFixMe
  console.log(model.lastName);
  return true;
};
const initialData = {
  firstName: ""
};
const form = (
  <Form validate={validate} initialData={initialData}>
    {data => (
      <div>
        <input value={data.firstName} />
        {/* $FlowFixMe */}
        <input value={data.lastName} />
      </div>
    )}
  </Form>
);
