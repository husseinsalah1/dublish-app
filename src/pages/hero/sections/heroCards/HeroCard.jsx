import { Box } from "@mui/material";
import style from "./style.module.css";
const HeroCard = ({ title, description, icon }) => {
  return (
    <Box
      className={style.hero_card}
      sx={{
        p: 2,
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Box sx={{ fontSize: 50, color: "secondary.main" }}>{icon}</Box>
      <Box sx={{ fontSize: 20, fontWeight: "bold", my: 1 }}>{title}</Box>
      <Box>{description}</Box>
    </Box>
  );
};

export default HeroCard;
