import { ScaledSheet, scale } from "react-native-size-matters";
import { cl } from "@app/styles";
import { CL_MAIN_TEMPLATE } from "@app/styles/colors";
import { getDeviceSize } from "@app/utilis";

const tabScreenLayout = ScaledSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: CL_MAIN_TEMPLATE,
  },
  titleWrapper: {
    marginTop: scale(20),
    marginHorizontal: scale(15),
  },
  wrapperSubtitle: {
    ...cl.bg_template,
    ...cl.flexJustifyCenter,
    height: scale(54),
    paddingHorizontal: scale(14),
    paddingVertical: scale(9),
  },
  subtitle: {
    lineHeight: scale(18),
    ...cl.fontFamilySemiBold,
  },
  scrollView: {
    height: getDeviceSize().height,
    flex: 1,
    backgroundColor: CL_MAIN_TEMPLATE,
    position: "relative",
  },
});
export default tabScreenLayout;
