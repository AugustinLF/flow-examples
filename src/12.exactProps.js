// @flow
import React from "react";

type Props = {|
  label: string,
  color?: string
|};
const Text = ({ label, color }: Props) => <div style={{ color }}>{label}</div>;

// $FlowFixMe
<Text label="It's a text" colour="red" />;
