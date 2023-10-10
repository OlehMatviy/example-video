export const emailPattern = /\S+@\S+\.\S+/;
export const mobilePattern = /[^0-9]/g;

export const phoneMask: (RegExp | string)[] = [
  "(",
  /\d/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
