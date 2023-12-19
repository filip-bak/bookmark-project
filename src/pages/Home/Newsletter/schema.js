import * as Yup from "yup";

export const newsletterSchema = Yup.object({
  email: Yup.string()
    .email("Whoops, make sure it's an email")
    .required("Email is required"),
});
