import CustomInput from "../../../components/customs/input";
import {
  Button,
  Box,
  Typography,
  Container,
  CircularProgress,
  Grid2,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/slices/auth.slice";
import { showToast } from "../../../utils/toastify";
import { Formik, Form } from "formik";
import { RegisterValidationSchema } from "../../../validations/auth";
import CustomDatePicker from "../../../components/customs/datePicker";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { registerImage } from "../../../assets/images";
import { useTranslation } from "react-i18next";

const initialValues = {
  name: {
    en: "",
    ar: "",
  },
  email: "",
  password: "",

  phone: "",
  birthDate: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const loading = useSelector((state) => state.auth.loading);
  const maxDate = dayjs().subtract(14, "year").format("MM-DD-YYYY");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(register({ data: values })).unwrap();
      showToast({ text: t("auth.register.success"), status: true });
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred";
      showToast({ text: message, status: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 10,
        p: 4,
        borderRadius: 2,
      }}
    >
      <Grid2 container spacing={4} alignItems="center">
        <Grid2
          item
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <img
            src={registerImage}
            alt="Login"
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </Grid2>
        <Grid2
          item
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Box textAlign="center" mb={2}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {t("auth.register.title")}
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={RegisterValidationSchema(t)}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form autoComplete="off">
                <CustomInput
                  name="name.en"
                  label={t("auth.register.fields.nameEn")}
                  type="text"
                  placeholder={t("auth.register.placeholder.nameEn")}
                  required
                />
                <CustomInput
                  name="name.ar"
                  label={t("auth.register.fields.nameAr")}
                  type="text"
                  placeholder={t("auth.register.placeholder.nameAr")}
                  required
                />
                <CustomInput
                  name="email"
                  label={t("auth.register.fields.email")}
                  type="email"
                  placeholder={t("auth.register.placeholder.email")}
                  required
                />
                <CustomInput
                  name="password"
                  label={t("auth.register.fields.password")}
                  type="password"
                  placeholder={t("auth.register.placeholder.password")}
                  required
                />
                <CustomInput
                  name="phone"
                  label={t("auth.register.fields.phone")}
                  type="text"
                  placeholder={t("auth.register.placeholder.phone")}
                  required
                />
                <CustomDatePicker
                  name="birthDate"
                  label={t("auth.register.fields.dateOfBirth")}
                  required
                  setFieldValue={setFieldValue}
                  maxDate={maxDate}
                />

                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={loading}
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      t("auth.register.fields.submit")
                    )}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Typography variant="body1" mt={2} textAlign="right">
            {t("auth.register.alreadyHaveAccount")} {""}
            <Link to="/login">{t("auth.register.loginNow")}</Link>
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Register;
