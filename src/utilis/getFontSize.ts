import { moderateScale } from "react-native-size-matters";

const getFontSize = (size: number) => {
  return { fontSize: moderateScale(size, 0.3) };
};

export default getFontSize;
