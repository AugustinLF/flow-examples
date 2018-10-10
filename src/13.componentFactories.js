// @flow
import * as React from "react";

// This factory is simple enough for flow to understand how it works
// but usually, it's not the case
const createComponent: any = () => ({ color }: { color: string }) => (
  <div style={{ color }} />
);

const Div: React.ComponentType<{ color: string }> = createComponent();

// $FlowFixMe Flow understands that color is needed
<Div />;
