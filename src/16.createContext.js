// @flow
import * as React from "react";

type Viewer = { firstname: string };

// People often pass a "wrong" default to mute flow, an object with empty
// strings, it doesn't make sense
const defaultViewer: ?Viewer = null;
const ViewerContext = React.createContext(defaultViewer);

type ViewerConsumerProps = {
  children: (viewer: Viewer) => React.Node
};
const ViewerConsumer = ({ children }: ViewerConsumerProps) => (
  <ViewerContext.Consumer>
    {viewer => {
      if (!viewer)
        throw new Error(
          "This component cannot be rendered without a viewer provider"
        );
      return children(viewer);
    }}
  </ViewerContext.Consumer>
);

// Flow would complain if using directly ViewerContext.Consumer,
// saying that viewer can be undefined
const ViewerRenderer = () => (
  <ViewerConsumer>
    {viewer => <div>Hello {viewer.firstname}</div>}
  </ViewerConsumer>
);
