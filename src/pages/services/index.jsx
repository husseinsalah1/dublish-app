import { Box, Typography, Grid2 } from "@mui/material";
import { FaBook, FaLanguage, FaLaptopCode } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        py: 6,
        px: { xs: 2, sm: 6 },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#333",
          textAlign: "center",
          mb: 4,
        }}
      >
        {t("services.title")}
      </Typography>

      {/* Courses Grid */}
      <Grid2 container spacing={4} sx={{ maxWidth: "1200px", mx: "auto" }}>
        {t("services.services", { returnObjects: true }).map(
          (course, index) => (
            <Grid2
              item
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
              key={index}
            >
              <ServiceCard
                icon={iconMap[course.icon]}
                title={course.title}
                description={course.description}
                animation={course.animation}
              />
            </Grid2>
          )
        )}
      </Grid2>
    </Box>
  );
};

const iconMap = {
  FaLanguage: <FaLanguage />,
  FaLaptopCode: <FaLaptopCode />,
  FaBook: <FaBook />,
};

export default Services;
