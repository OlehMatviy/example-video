import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { cl } from "@app/styles";

const loaderStyle = StyleSheet.create({
  wrapp: {
    ...cl.flex1,
    ...cl.flexJustifyCenter,
    ...cl.flexRowAround,
    paddingHorizontal: scale(10),
    paddingVertical: scale(30),
  },
});

export default loaderStyle;
