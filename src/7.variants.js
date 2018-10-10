// @flow
type Red = {
  color: "red",
  intensity: "light" | "dark"
};
const createRedColor = (intensity: "light" | "dark"): Red => {
  return {
    color: "red",
    intensity
  };
};
