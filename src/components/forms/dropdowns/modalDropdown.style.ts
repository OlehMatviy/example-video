import { scale, ScaledSheet } from "react-native-size-matters";
import { CL_WHITE } from "@app/styles/colors";
import { paddingX, paddingY, cl } from "@app/styles";

const modalDropdown = ScaledSheet.create({
  containerStyle: {
    width: "50%",
  },
  dropDownContainerStyle: {
    borderColor: "#d7e1f0",
    backgroundColor: CL_WHITE,
    marginVertical: scale(4),
    borderRadius: scale(8),
  },
  labelStyle: {
    ...cl.fontFamilyRegular,
    ...cl.textAlignRight,
    color: "#3b3d3e",
  },
  wrapper: {
    borderWidth: 0,
    height: scale(32),
    ...paddingX(8),
    ...paddingY(0),
  },
  border: { borderColor: "#469ce5" },
  textStyle: {
    ...cl.textAlignRight,
    ...cl.fontFamilyRegular,
    color: "#3b3d3e",
  },
  listParentContainerStyle: {
    flexDirection: "row-reverse",
  },
});

export default modalDropdown;
