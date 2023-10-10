import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form";

export type IYupSchema = yup.ObjectSchema<
  { [p: string]: any },
  yup.AnyObject,
  { [p: string]: any },
  ""
>;

const initValidation = (shape: { [p: string]: any }) => {
  return yup.object().shape(shape).required();
};

const validationResolver = <T extends FieldValues>(schema: any) => yupResolver<T>(schema);

const invalidClassName = "is-invalid";

const toggleInvalidInput = (invalid: boolean) => (invalid ? invalidClassName : "");

const validationPhone = (val: string | undefined): boolean => {
  if (!val) return false;
  const clearMask = val && val.replace(/-|_|[{()}]/g, "").length;
  return clearMask > 11;
};

const numberMask = (value: string) =>
  /(\..*){2,}/.test(value) ? value.slice(0, -1) : value.replace(/[^0-9.]/g, "");

const mobilePattern = /[^0-9]/g;

const validationNumber = (
  value: string,
  callback: (value: string) => void,
  lengthNumber: number,
) => {
  const reg = value.replace(mobilePattern, "");

  if (reg.length <= lengthNumber) {
    callback(reg);
  }
};

export {
  validationResolver,
  initValidation,
  validationPhone,
  toggleInvalidInput,
  numberMask,
  mobilePattern,
  validationNumber,
};
