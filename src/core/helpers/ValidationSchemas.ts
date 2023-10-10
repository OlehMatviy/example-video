import * as yup from "yup";
import YupPassword from "yup-password";
import { initValidation } from "./Validation";

YupPassword(yup);

const signInSchema = initValidation({
  email: yup
    .string()
    .email("Email address must be valid")
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Email address must be valid")
    .required("Email address is required"),
  password: yup.string().required("Password is required"),
});

const forgotPasswordSchema = initValidation({
  email: yup
    .string()
    .email("Email address must be valid")
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Email address must be valid")
    .required("Email address is required"),
});

const confirmPasswordSchema = initValidation({
  alias: yup.string().required("Alias is required"),
  email: yup
    .string()
    .email("Email address must be valid")
    .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Email address must be valid")
    .required("Email address is required"),
  password: yup
    .string()
    .minLowercase(1, "Please include one lowercase character")
    .minUppercase(1, "Please include one uppercase character")
    .minNumbers(1, "Please include one number")
    .minSymbols(1, "Please include one special character")
    .min(8, "Please include eight characters minimum")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Re-enter password is required"),
});

const resetPasswordSchema = initValidation({
  password: yup
    .string()
    .required()
    .min(
      8,
      "Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special",
    )
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number")
    .minSymbols(1, "Password must contain at least 1 special character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

const aliasSchema = initValidation({
  alias: yup.string().required("Alias is required").min(3, "Alias must contain 3 symbols"),
});

const weightSchema = initValidation({
  answer: yup.object().required(),
  height: yup.mixed(),
  weight: yup.mixed(),
});

const heightSchema = initValidation({
  answer: yup.object().required(),
  column1: yup.string(),
  column2: yup.string(),
  cm: yup.string(),
});

const contactSchema = initValidation({
  firstName: yup.string(),
  lastName: yup.string(),
  code: yup.string(),
  country: yup.string().required("Country is required"),
  phone: yup.string().min(13, "Phone must be valid").required("Phone is required"),
  zipCode: yup.string().min(5).required("Zip/Postal is required"),
});

const answerSchema = initValidation({
  answer: yup.object().required("Answer is required"),
});

const dateOfBirthSchema = initValidation({
  month: yup.string().required(),
  day: yup.string().required(),
  year: yup.string().required(),
});

export {
  signInSchema,
  forgotPasswordSchema,
  confirmPasswordSchema,
  resetPasswordSchema,
  aliasSchema,
  contactSchema,
  answerSchema,
  dateOfBirthSchema,
  weightSchema,
  heightSchema,
};
