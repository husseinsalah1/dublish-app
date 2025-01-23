import * as Yup from "yup";

export const supportValidationSchema = (t) => {
  return Yup.object().shape({
    name: Yup.string().required(t("support.errors.name.required")),
    email: Yup.string()
      .email(t("support.errors.email.invalid"))
      .required(t("support.errors.email.required")),
    subject: Yup.string().required(t("support.errors.subject.required")),
    message: Yup.string().required(t("support.errors.message.required")),
  });
};
