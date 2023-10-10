import { checkLength, checkLengthArray } from "./checkLength";
import { cutText, replaceExternalFoodName, replaceHighlightText, startText } from "./cutText";
import getDeviceSize from "./getDeviceSize";
import { checkWidth, getFontFamily } from "./getFontFamily";
import getFontSize from "./getFontSize";
import isIpad from "./isIpad";
import wait from "./Timeout";

export {
  isIpad,
  getDeviceSize,
  checkLength,
  checkLengthArray,
  getFontSize,
  getFontFamily,
  checkWidth,
  cutText,
  wait,
  replaceExternalFoodName,
  replaceHighlightText,
  startText,
};

export * from "./convertingData";
export * from "./DateTimeFormatting";
export * from "./calcNutrition";
export * from "./debounce";
export * from "./deviceInfo";
export * from "./isRole";
