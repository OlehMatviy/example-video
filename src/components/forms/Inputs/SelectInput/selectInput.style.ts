import { StyleSheet } from "react-native";
import { CL_GRAY_EF, CL_WHITE } from "@app/styles/colors";
import { moderateScale, scale } from "react-native-size-matters";
import { cl } from "@app/styles";

const selectInputStyle = StyleSheet.create({
  containerBlock: {
    borderRadius: 0,
    zIndex: 9,
  },
  dropDownContainerStyle: {
    backgroundColor: CL_WHITE,
    borderColor: CL_GRAY_EF,
    borderRadius: 0,
    marginTop: scale(8),
    zIndex: 99,
  },
  text: {
    fontSize: moderateScale(15, 0.3),
    ...cl.fontFamilyRegular,
    ...cl.cl_black,
  },
});

export default selectInputStyle;
