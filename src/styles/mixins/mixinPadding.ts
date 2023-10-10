import { scale } from "react-native-size-matters";

export const padding = (value: number) => {
  return { padding: scale(value) };
};
export const paddingL = (value: number) => {
  return { paddingLeft: scale(value) };
};

export const paddingR = (value: number) => {
  return { paddingRight: scale(value) };
};

export const paddingT = (value: number) => {
  return { paddingTop: scale(value) };
};

export const paddingB = (value: number) => {
  return { paddingBottom: scale(value) };
};

export const paddingX = (value: number) => {
  return { paddingHorizontal: scale(value) };
};

export const paddingY = (value: number) => {
  return { paddingVertical: scale(value) };
};
