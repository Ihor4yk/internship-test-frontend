import * as yup from "yup";

const passwordField = yup
  .string()
  .transform(value => (value === "" ? undefined : value))
  .required("Password is required")
  .min(8, "Password must be at least 8 characters");

export const loginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  password: passwordField,
});

export const registerSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email address").required("Email is required"),
  password: passwordField,
});

export type LoginFormData = yup.InferType<typeof loginSchema>;
export type RegisterFormData = yup.InferType<typeof registerSchema>;
