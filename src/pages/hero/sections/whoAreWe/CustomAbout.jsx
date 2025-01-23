import { Box, Paper, Typography } from "@mui/material";
import style from "./style.module.css";
const CustomAbout = ({ icon, title, description, dataAos }) => {
  return (
    <div data-aos={`${dataAos}`}>
      <Paper
        elevation={3}
        sx={{
          width: "8rem",
          height: "8rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid primary.dark",
          margin: "0 auto",
          color: "secondary.dark",
          fontSize: "2.1rem",
        }}
        className={style.aboutIcon}
      >
        <i>{icon}</i>
      </Paper>
      <Box width={300} sx={{ textAlign: "center", margin: " 0 20px" }}>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          {title}
        </Typography>
        <Typography sx={{ marginTop: 1 }}>{description}</Typography>
      </Box>
    </div>
  );
};

export default CustomAbout;
