/* eslint react-native/sort-styles: "off" */
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

import {
  CL_BLACK,
  CL_BLUE,
  CL_DANGER,
  CL_MAIN_CONTENT,
  CL_MAIN_TEMPLATE,
  CL_PRIMARY,
  CL_WARNING1,
  CL_WHITE,
} from "@app/styles/colors";
import { TiltWarpRegular, OxygenFontRegular, OxygenFontBold } from "./fonts";

const cl = StyleSheet.create({
  // Flex
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flexAlignCenter: { alignItems: "center" },
  flexAlignEnd: { alignItems: "flex-end" },
  flexAlignStart: { alignItems: "flex-start" },
  flexCenter: { alignItems: "center", flexDirection: "row", justifyContent: "center" },
  flexColumn: { flexDirection: "column" },
  flexColumnBetween: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  flexColumnCenter: { alignItems: "center", flexDirection: "column" },
  flexColumnCentered: { alignItems: "center", flexDirection: "column", justifyContent: "center" },
  flexEnd: { justifyContent: "flex-end" },
  flexJustifyCenter: { justifyContent: "center" },
  flexRow: { flexDirection: "row" },
  flexRowAround: { flexDirection: "row", justifyContent: "space-around" },
  flexRowBetween: { flexDirection: "row", justifyContent: "space-between" },
  flexRowCenter: { flexDirection: "row", justifyContent: "center" },
  flexRowReverse: { flexDirection: "row-reverse" },
  flexRowWrap: { flexDirection: "row", flexWrap: "wrap" },
  flexStart: { justifyContent: "flex-start" },
  flexWrap: { flexWrap: "wrap" },
  flexSelfStart: { alignSelf: "flex-start" },
  flexSelfEnd: { alignSelf: "flex-end" },

  // Opacity
  o_100: { opacity: 1 },
  o_80: { opacity: 0.8 },
  o_90: { opacity: 0.9 },

  // Text
  textAlignCenter: { textAlign: "center" },
  textAlignLeft: { textAlign: "left" },
  textAlignRight: { textAlign: "right" },
  textUppercase: { textTransform: "uppercase" },

  // border
  border10: { borderRadius: scale(10) },
  border_0: { borderWidth: 0 },

  positionRelative: { position: "relative" },
  positionAbsolute: { position: "absolute" },

  // image
  resizeCover: { resizeMode: "cover" },
  resizeContain: { resizeMode: "contain" },
  image: { resizeMode: "contain", width: "100%", height: "100%" },

  // size
  fullSize: { width: "100%", height: "100%" },
  w100: { width: "100%" },
  w50: { width: "50%" },
  h100: { height: "100%" },
  h50: { height: "50%" },
  // colors
  cl_template: { color: CL_MAIN_TEMPLATE },
  cl_content: { color: CL_MAIN_CONTENT },
  cl_primary: { color: CL_PRIMARY },
  cl_danger: { color: CL_DANGER },
  cl_black: { color: CL_BLACK },
  cl_white: { color: CL_WHITE },
  cl_blue: { color: CL_BLUE },
  cl_yellow: { color: CL_WARNING1 },

  // Font Family
  fontFamilyRegular: { fontFamily: OxygenFontRegular },
  fontFamilyRegularTilt: { fontFamily: TiltWarpRegular },
  fontFamilySemiBold: { fontFamily: OxygenFontBold },
  fontBold: { fontWeight: "bold" },
  textCenter: { textAlign: "center" },
  textLeft: { textAlign: "left" },

  fWeight700: { fontWeight: "700" },

  // Background colors
  bg_template: { backgroundColor: CL_MAIN_TEMPLATE },
  bg_content: { backgroundColor: CL_MAIN_CONTENT },
  bg_primary: { backgroundColor: CL_PRIMARY },
  bg_danger: { backgroundColor: CL_DANGER },
  bg_black: { backgroundColor: CL_BLACK },
  bg_white: { backgroundColor: CL_WHITE },
  bg_blue: { backgroundColor: CL_BLUE },
});

export default cl;
