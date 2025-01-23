import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQAccordion = ({ question, answer, panelId }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === panelId}
      onChange={handleChange(panelId)}
      sx={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        mb: 2,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        "&:before": { display: "none" },
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#1976d2" }} />}
        sx={{
          bgcolor: "#f5f5f5",
          px: 3,
          py: 2,
          borderRadius: "8px",
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 3, py: 2 }}>
        <Typography variant="body2" sx={{ color: "gray", lineHeight: 1.8 }}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQAccordion;
