import { Grid2 } from "@mui/material";
import { GiBrassEye, GiDiamondHard, GiSupersonicArrow } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import CustomAbout from "./CustomAbout";

const WhoAreWe = () => {
  const { t } = useTranslation();

  return (
    <Grid2 container spacing={6}>
      {t("hero.abouts", { returnObjects: true }).map((about, index) => (
        <CustomAbout
          key={index}
          icon={iconMap[about.icon]}
          title={about.title}
          description={about.description}
          dataAos={
            index === 0 ? "fade-right" : index === 1 ? "fade-up" : "fade-left"
          }
        />
      ))}
    </Grid2>
  );
};

const iconMap = {
  GiBrassEye: <GiBrassEye />,
  GiSupersonicArrow: <GiSupersonicArrow />,
  GiDiamondHard: <GiDiamondHard />,
};

export default WhoAreWe;
