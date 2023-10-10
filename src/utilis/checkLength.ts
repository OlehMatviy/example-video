const checkLength = (value: string): boolean => !!(value && value.length > 0);

const checkLengthArray = <T>(array: Array<T>): boolean => array && array.length > 0;

const isObject = (value: unknown): boolean => {
  return typeof value === "object";
};

const isGreaterThanZero = (value: number) => {
  return value > 0;
};

const isGreaterThanZeroOrEqual = (value: number) => {
  return value >= 0;
};

export { isObject, checkLengthArray, checkLength, isGreaterThanZero, isGreaterThanZeroOrEqual };
