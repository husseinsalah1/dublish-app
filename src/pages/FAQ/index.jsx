import { Box, Typography, Container } from "@mui/material";
import { FaQuestionCircle } from "react-icons/fa";
import FAQAccordion from "./FAQAccordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ bgcolor: "#f9f9f9" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "#1976d2",
          color: "#fff",
          textAlign: "center",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <FaQuestionCircle size={50} />
          <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2 }}>
            {t("faq.title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, lineHeight: 1.8, maxWidth: "700px", mx: "auto" }}
          >
            {t("faq.description")}
          </Typography>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: 6 }}>
        {t("faq.questions", { returnObjects: true }).map((faq, index) => (
          <FAQAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
            panelId={`panel${index}`}
          />
        ))}
      </Container>
    </Box>
  );
};

export default FAQ;
