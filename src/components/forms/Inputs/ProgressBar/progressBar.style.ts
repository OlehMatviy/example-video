import { scale } from "react-native-size-matters";
import { StyleSheet } from "react-native";
import { CL_BLUE_5A, CL_LIGHT_EB, CL_WHITE } from "@app/styles/colors";

const progressBarStyle = StyleSheet.create({
  fillBar: {
    height: "100%",
  },
  normalBar: {
    backgroundColor: CL_BLUE_5A,
    height: "100%",
  },
  overBar: {
    backgroundColor: CL_LIGHT_EB,
    height: "100%",
  },
  positiveBar: {
    height: "100%",
  },
  progressBarContainer: {
    borderColor: CL_WHITE,
    borderRadius: scale(25),
    borderWidth: 1,
    bottom: scale(5),
    height: scale(10),
    left: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: 2,
  },
  wrapper: {
    borderRadius: scale(25),
    flexDirection: "row",
    height: scale(20),
    overflow: "hidden",
    position: "relative",
    width: scale(164),
  },
});

export default progressBarStyle;
