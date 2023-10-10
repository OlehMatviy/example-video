import { cl } from "@app/styles";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { CL_PRIMARY } from "@app/styles/colors";

export const checkBorder = (checked: boolean) =>
  checked ? { borderColor: CL_PRIMARY } : { borderColor: "#EFEFEF" };

export const radioStyle = StyleSheet.create({
  button: {
    marginTop: scale(16),
    ...cl.flexRow,
    ...cl.flexAlignCenter,
  },
  checked: {
    backgroundColor: CL_PRIMARY,
    borderColor: CL_PRIMARY,
    borderRadius: scale(18 / 2),
    height: scale(18),
    width: scale(18),
  },
  mr: {
    marginRight: scale(18),
  },
  radio: {
    borderRadius: scale(24 / 2),
    borderWidth: 1,
    height: scale(24),
    width: scale(24),
    ...cl.flexRowCenter,
    ...cl.flexColumnCenter,
  },
  text: {
    lineHeight: scale(22),
    marginLeft: scale(10),
  },
});
