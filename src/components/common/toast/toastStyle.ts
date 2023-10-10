import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { cl } from "@app/styles";
import { IS_IOS } from "@app/constants";
import { UNotificationTypes } from "@app/core/types/general/INotification";
import { CL_BLACK, CL_PEACH, CL_SUCCESS } from "@app/styles/colors";

const { flexRowBetween, flexRowCenter, flexAlignCenter } = cl;

export const sizeBottom = (authLayout: boolean, top?: boolean) => {
  // eslint-disable-next-line no-nested-ternary
  return authLayout
    ? { bottom: IS_IOS ? 100 : 75 }
    : top
    ? { top: scale(50) }
    : { bottom: scale(30) };
};

export const setBackground = (type: UNotificationTypes) => {
  switch (type) {
    case "success":
      return { backgroundColor: "rgba(128, 216, 255, 0.8)" };
    // case "warning":
    //   return { backgroundColor: CL_WARNING };
    // case "danger":
    //   return { backgroundColor: CL_DANGER };
    default:
      return { backgroundColor: "rgba(128, 216, 255, 0.8)" };
  }
};

export const setBorder = (type: UNotificationTypes) => {
  switch (type) {
    case "success":
      return { borderColor: CL_SUCCESS };
    // case "warning":
    //   return { borderColor: CL_PEACH };
    // case "danger":
    //   return { borderColor: CL_PEACH };
    default:
      return { borderColor: CL_SUCCESS };
  }
};

export const toastStyle = StyleSheet.create({
  button: {
    borderColor: CL_PEACH,
    borderLeftWidth: 1,
    height: "100%",
    width: scale(63),
    ...flexRowCenter,
    ...flexAlignCenter,
  },
  content: {
    ...flexRowBetween,
    ...flexAlignCenter,
    paddingHorizontal: scale(14),
    paddingLeft: scale(25),
    paddingVertical: scale(24),
  },
  text: {
    fontSize: scale(14),
    ...cl.fontFamilySemiBold,
    color: CL_BLACK,
  },
  wrapp: {
    borderRadius: scale(20),
    filter: "blur(10)",
    fontSize: scale(14),
    left: scale(10),
    position: "absolute",
    right: scale(10),
    zIndex: 10,
  },
});
