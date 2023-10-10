import { scale, ScaledSheet } from "react-native-size-matters";
import { colors, cl } from "@app/styles";
import { CL_DANGER, CL_PRIMARY } from "@app/styles/colors";

export const solidButton = ScaledSheet.create({
  btn: {
    ...cl.flexJustifyCenter,
    borderRadius: scale(24),
    backgroundColor: colors.CL_DANGER,
    ...cl.flexRow,
  },
  btnOption: {
    borderRadius: scale(34),
    ...cl.flexRow,
    backgroundColor: colors.CL_DANGER
  },
  text: {
    color: colors.CL_WHITE,
    paddingHorizontal: scale(20),
    paddingVertical: scale(12),
    ...cl.flexJustifyCenter,
    borderRadius: 6,
    fontSize: scale(16),
    ...cl.fontFamilyRegularTilt,
  },
  textOption: {
    color: colors.CL_WHITE,
    fontSize: scale(14),
    ...cl.fontFamilyRegularTilt,
  },
  description: {
    color: colors.CL_WHITE,
    fontSize: scale(13),
    ...cl.fontFamilySemiBold,
  },

});
export const outlineButton = ScaledSheet.create({
  btn: {
    ...cl.bg_white,
    borderColor: CL_DANGER,
    borderWidth: scale(2),
    ...cl.flexCenter,
    borderRadius: scale(24),
    height: scale(45),
  },
  btnOption: {
    ...cl.bg_white,
    ...cl.flexRow,
    borderColor: CL_DANGER,
    borderWidth: scale(2),
    borderRadius: scale(34),
  },
  text: {
    fontSize: scale(13),
    paddingHorizontal: scale(10),
    paddingVertical: scale(0),
    color: CL_PRIMARY,
    ...cl.fontFamilyRegularTilt,
  },
  textOption: {
    fontSize: scale(13),
    color: CL_DANGER,
    ...cl.fontFamilyRegularTilt,
  },
  description: {
    color: CL_DANGER,
    fontSize: scale(13),
    ...cl.fontFamilySemiBold,
  },
});
