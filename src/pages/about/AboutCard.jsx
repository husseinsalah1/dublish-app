import { Box, Typography } from "@mui/material";

const AboutCard = ({ title, icon, description }) => {
  return (
    <Box textAlign="center">
      {/* Icon */}
      <Box sx={{ fontSize: 50, color: "secondary.main" }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default AboutCard;
