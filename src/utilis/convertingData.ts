const convertServing = (serving: number) => {
  if (Number.isInteger(serving)) {
    return serving;
  }

  const decimalPlaces = serving.toString().split(".")[1]?.length || 0;

  if (decimalPlaces <= 1) {
    return serving.toFixed(decimalPlaces);
  }

  return serving.toFixed(2);
};

const isString = (value: unknown): boolean => {
  return typeof value === "string";
};

const isNumber = (value: unknown): boolean => {
  return typeof value === "number";
};

const isBoolean = (value: unknown): boolean => {
  return typeof value === "boolean";
};

const checkThanZero = (value: number): number => {
  return value > 0 ? value : 0;
};

const toUSNumber = (value: number) => {
  // eslint-disable-next-line prefer-const
  let [integerPart, decimalPart = ""] = value.toString().split(".");

  if (integerPart.length >= 3) {
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return decimalPart !== "" ? `${integerPart}.${decimalPart}` : integerPart;
};

const toUSNumberRound = (value: number) => {
  let integerPart = Math.round(value).toString();

  if (integerPart.length >= 3) {
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return integerPart;
};

const isPositiveNUmber = (value: number): boolean => {
  return !!value && value > 0;
};

const numberFixed = (value: number | string, fixed?: number) =>
  Number(parseFloat(value.toString()).toFixed(fixed ?? 0));

export {
  convertServing,
  isString,
  isNumber,
  checkThanZero,
  toUSNumber,
  numberFixed,
  toUSNumberRound,
  isPositiveNUmber,
  isBoolean,
};
