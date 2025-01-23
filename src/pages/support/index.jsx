import { useState } from "react";
import {
  Box,
  Container,
  Button,
  Typography,
  Snackbar,
  Alert,
  Paper,
  Grid2,
} from "@mui/material";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { supportValidationSchema } from "../../validations/support";
import CustomInput from "../../components/customs/input";

const Support = () => {
  const { t } = useTranslation();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  // Handle form submission
  const handleSubmit = () => {
    setSnackbarMessage(t("support.success"));
    setSeverity("success");
    setOpenSnackbar(true);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Right Form Section */}
        <Box sx={{ flex: 1, px: 2 }}>
          <Paper
            sx={{
              p: 4,
              borderRadius: "12px",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
            data-aos="fade-left"
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center", color: "#333" }}
            >
              {t("support.title")}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                lineHeight: 1.8,
                textAlign: "center",
                maxWidth: "600px",
                mx: "auto",
                color: "#666",
              }}
            >
              {t("support.description")}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Formik
                initialValues={initialValues}
                validationSchema={supportValidationSchema(t)}
                onSubmit={handleSubmit}
              >
                {() => (
                  <Form autoComplete="off">
                    <Grid2 container spacing={2}>
                      <Grid2 item size={{ xs: 12, md: 6 }}>
                        <CustomInput
                          name="name"
                          label={t("support.fields.name")}
                          type="text"
                          placeholder={t("support.placeholder.name")}
                          required
                        />
                      </Grid2>
                      <Grid2 item size={{ xs: 12, md: 6 }}>
                        <CustomInput
                          name="email"
                          label={t("support.fields.email")}
                          type="email"
                          placeholder={t("support.placeholder.email")}
                          required
                        />
                      </Grid2>
                      <Grid2 item size={{ xs: 12 }}>
                        <CustomInput
                          name="subject"
                          label={t("support.fields.subject")}
                          type="text"
                          placeholder={t("support.placeholder.subject")}
                          required
                        />
                      </Grid2>
                      <Grid2 item size={{ xs: 12 }}>
                        <CustomInput
                          name="message"
                          label={t("support.fields.message")}
                          type="text"
                          placeholder={t("support.placeholder.message")}
                          required
                          multiline
                          rows={4}
                        />
                      </Grid2>
                      <Grid2 item size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          {t("support.fields.sendMessage")}
                        </Button>
                      </Grid2>
                    </Grid2>
                  </Form>
                )}
              </Formik>
            </Box>
          </Paper>

          {/* Snackbar for form submission status */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
          >
            <Alert
              onClose={() => setOpenSnackbar(false)}
              severity={severity}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </Box>
  );
};

export default Support;
