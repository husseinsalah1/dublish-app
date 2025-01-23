import { Typography, Box, Container, Grid2, Button } from "@mui/material";
import { FaChalkboardTeacher, FaCode, FaAward } from "react-icons/fa";
import { aboutImage } from "./../../assets/images/index";
import { useTranslation } from "react-i18next";
import AboutCard from "./AboutCard";
const About = () => {
  const iconMap = {
    FaChalkboardTeacher: <FaChalkboardTeacher />,
    FaCode: <FaCode />,
    FaAward: <FaAward />,
  };
  const { t } = useTranslation();
  return (
    <Box sx={{ bgcolor: "#f9f9f9" }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "secondary.dark",
          color: "#fff",
          py: 8,
          textAlign: "center",
        }}
        data-aos="fade-in"
      >
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            {t("about.title")}
          </Typography>
          <Typography
            variant="h6"
            sx={{ lineHeight: 1.8, maxWidth: "700px", mx: "auto", mb: 4 }}
          >
            {t("about.description")}
          </Typography>
          <Button variant="contained" size="large" color="primary">
            {t("about.learnMore")}
          </Button>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid2 container spacing={6} alignItems="center">
          <Grid2
            item
            size={{
              xs: 12,
              md: 6,
            }}
            data-aos="fade-right"
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              {t("about.whoAreWe")}
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, fontSize: "1.1rem", mb: 4, color: "gray" }}
            >
              {t("about.whoAreWeDescription")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "secondary",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              {t("about.joinUsToday")}
            </Button>
          </Grid2>
          <Grid2
            item
            size={{
              xs: 12,
              md: 6,
            }}
            data-aos="fade-left"
          >
            <img
              src={aboutImage}
              alt="About Us"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid2>
        </Grid2>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: "#fff", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center", mb: 6 }}
            data-aos="fade-up"
          >
            {t("about.whyChooseUs")}
          </Typography>
          <Grid2 container spacing={6}>
            {t("about.whyChooseUsArr", { returnObjects: true }).map(
              (item, index) => {
                console.log(item.icon);
                return (
                  <Grid2
                    item
                    size={{ xs: 12, md: 4 }}
                    key={index}
                    data-aos="fade-up"
                  >
                    <AboutCard
                      title={item.title}
                      description={item.description}
                      icon={iconMap[item.icon]}
                    />
                  </Grid2>
                );
              }
            )}
          </Grid2>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "secondary.dark",
          color: "#fff",
          py: 6,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            {t("about.startLearningToday")}
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4 }}>
            {t("about.startLearningTodayDescription")}
          </Typography>
          <Button variant="contained" size="large" color="primary">
            {t("about.getStartedNow")}
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
