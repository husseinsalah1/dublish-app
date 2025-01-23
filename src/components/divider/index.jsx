import { Divider, Typography, Box } from "@mui/material";
import "./style.css";
const CustomDivider = ({ title }) => {
  return (
    <Box sx={{ textAlign: "center", my: 8 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 2 }}
        color="secondary"
        className="divider"
      >
        <div data-aos="fade-up"> {title}</div>
      </Typography>
      <Divider sx={{ width: "3%", mx: "auto", background: "#f9c94f" }} />
    </Box>
  );
};

export default CustomDivider;
