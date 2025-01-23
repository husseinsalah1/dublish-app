import * as Yup from "yup";

export const loginValidationSchema = (t) =>
  Yup.object({
    email: Yup.string()
      .email(t("auth.login.errors.email.invalid"))
      .required(t("auth.login.errors.email.required")),
    password: Yup.string().required(t("auth.login.errors.password.required")),
  });

export const RegisterValidationSchema = (t) =>
  Yup.object().shape({
    name: Yup.object().shape({
      en: Yup.string()
        .required(t("auth.register.errors.nameEn.required"))
        .matches(/^[a-zA-Z\s]+$/, t("auth.register.errors.nameEn.matches"))
        .min(2, t("auth.register.errors.nameEn.min"))
        .max(50, t("auth.register.errors.nameEn.max")),
      ar: Yup.string()
        .required(t("auth.register.errors.nameAr.required"))
        .matches(
          /^[\u0600-\u06FF\s]+$/,
          t("auth.register.errors.nameAr.matches")
        )
        .min(2, t("auth.register.errors.nameAr.min"))
        .max(50, t("auth.register.errors.nameAr.max")),
    }),
    email: Yup.string()
      .email(t("auth.register.errors.email.invalid"))
      .required(t("auth.register.errors.email.required"))
      .matches(/^[a-zA-Z0-9@._-]+$/, t("auth.register.errors.email.matches")),
    password: Yup.string()
      .required(t("auth.register.errors.password.required"))
      .min(8, t("auth.register.errors.password.min"))
      .matches(/[0-9]/, t("auth.register.errors.password.matches.number"))
      .matches(/[a-z]/, t("auth.register.errors.password.matches.lowercase"))
      .matches(/[A-Z]/, t("auth.register.errors.password.matches.uppercase"))
      .matches(/[@$!%*?&#]/, t("auth.register.errors.password.matches.special"))
      .matches(
        /^[a-zA-Z0-9@$!%*?&#]+$/,
        t("auth.register.errors.password.matches.main")
      ),
    phone: Yup.string().required(t("auth.register.errors.phone.required")),
    birthDate: Yup.date()
      .required("Birthdate is required")
      .max(new Date(), "Birthdate cannot be in the future")
      .typeError("Invalid date format, use MM-DD-YYYY"),
  });
