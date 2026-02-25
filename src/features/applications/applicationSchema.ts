import * as yup from "yup";

export const applicationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  image: yup
    .mixed<File>()
    .nullable()
    .optional()
    .test("fileSize", "File is too large", value => !value || value.size <= 5_000_000)
    .test(
      "fileType",
      "Unsupported file type",
      value => !value || ["image/jpeg", "image/png", "image/webp"].includes(value.type),
    ),
});
