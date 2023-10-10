import { scale } from "react-native-size-matters";

const widthSize = (value: number) => {
  return { width: `${value}%` };
};

const heightSize = (value: number) => {
  return { height: `${value}%` };
};
const brSize = (value: number) => {
  return { borderWidth: scale(value) };
};

export { widthSize, heightSize, brSize };
