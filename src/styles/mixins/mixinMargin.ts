import { scale } from "react-native-size-matters";

export const marginL = (value: number) => {
  return { marginLeft: scale(value) };
};

export const marginR = (value: number) => {
  return { marginRight: scale(value) };
};

export const marginT = (value: number) => {
  return { marginTop: scale(value) };
};

export const marginB = (value: number) => {
  return { marginBottom: scale(value) };
};

export const marginX = (value: number) => {
  return { marginHorizontal: scale(value) };
};

export const marginY = (value: number) => {
  return { marginVertical: scale(value) };
};

export const margin = (value: number) => {
  return { margin: scale(value) };
};
