import { cl } from "../styles";

export const getFontFamily = (fontType: "regular" | "tilt" | "bold") => {
  switch (fontType) {
    case "regular":
      return cl.fontFamilyRegular;
    case "bold":
      return cl.fontFamilySemiBold;
    case "tilt":
      return cl.fontFamilyRegularTilt;
    default:
      return cl.fontFamilyRegular;
  }
};

export const checkWidth = (fullWidth: boolean) => (fullWidth ? { width: "100%" } : {});
