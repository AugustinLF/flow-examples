// @flow
import React from "react";

type Props = {
  withColor: boolean,
  color?: number
};

const intensities = ["blue", "red", "green"];

const ColorRenderer = (props: Props) => {
  // There's no way for flow to know that when withColor is true, there is a color prop
  // $FlowFixMe
  const backgroundColor = props.withColor ? intensities[props.color] : "black";
  return <div style={{ backgroundColor }} />;
};
