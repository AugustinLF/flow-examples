// @flow
import * as React from "react";

type Props = {
  children: (token: string) => React.Node
};
const InjectViewer = ({ children }: Props) => children("super secure");

const Fetcher = (props: { token: string }) => <div />;

<InjectViewer>{token => <Fetcher token={token} />}</InjectViewer>;
