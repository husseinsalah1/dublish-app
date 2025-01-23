import { Box, Grid2 } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FaUserGraduate } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { AiOutlineInteraction } from "react-icons/ai";
import HeroCard from "./HeroCard";

const HeroCards = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Grid2 container spacing={6}>
        {t("hero.cards", { returnObjects: true }).map((card, index) => (
          <Grid2 item key={index} size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <HeroCard
              title={card.title}
              description={card.description}
              icon={iconMap[card.icon]}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

const iconMap = {
  FaUserGraduate: <FaUserGraduate />,
  GoBook: <GoBook />,
  AiOutlineInteraction: <AiOutlineInteraction />,
};

export default HeroCards;
