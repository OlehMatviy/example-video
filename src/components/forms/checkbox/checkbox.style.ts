import { cl } from "@app/styles";
import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { CL_DANGER, CL_WHITE } from "@app/styles/colors";

export const checkbox = StyleSheet.create({
  active: {
    backgroundColor: CL_WHITE,
    ...cl.flexRowCenter,
    ...cl.flexAlignCenter,
  },
  box: {
    backgroundColor: CL_WHITE,
    borderColor: CL_DANGER,
    borderRadius: scale(6),
    borderWidth: scale(2),
    height: scale(24),
    width: scale(24),
  },
});
