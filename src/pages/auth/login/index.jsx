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
import { login } from "../../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../../utils/toastify";
import { Formik, Form } from "formik";
import { loginValidationSchema } from "../../../validations/auth";
import { loginImage } from "./../../../assets/images/index";
import { useTranslation } from "react-i18next";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { token, result } = await dispatch(
        login({ data: values })
      ).unwrap();
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      showToast({ text: t("auth.login.success"), status: true });
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
            src={loginImage}
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
              {t("auth.login.welcomeBack")}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {t("auth.login.signInToContinue")}
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema(t)}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form autoComplete="off">
                <CustomInput
                  name="email"
                  label={t("auth.login.fields.email")}
                  type="email"
                  placeholder={t("auth.login.placeholder.email")}
                  required
                />
                <CustomInput
                  name="password"
                  label={t("auth.login.fields.password")}
                  type="password"
                  placeholder={t("auth.login.placeholder.password")}
                  required
                />
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
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
                      t("auth.login.fields.submit")
                    )}
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Login;
