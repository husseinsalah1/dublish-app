import { useState, useEffect } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { cover } from "@/assets/images";
import { isTokenValid } from "@/utils/token";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HeroCards from "./sections/heroCards";
import CoursesShow from "./sections/courses";
import Navbar from "@/components/layout/navbar";
import CustomDivider from "@/components/divider";
import WhoAreWe from "./sections/whoAreWe";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isAuthenticated = isTokenValid();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 150);
    };
    const debounceScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debounceScroll);
    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, []);

  return (
    <Box position={"relative"}>
      <Box sx={stickyNavbarStyle(isScrolled)}>
        <Navbar />
      </Box>

      <Box sx={mainSectionStyle}>
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            {t("hero.title")}
          </Typography>
          <Typography variant="h5" component="p" sx={{ mb: 4 }}>
            {t("hero.description")}
          </Typography>
          {!isAuthenticated && (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ textTransform: "uppercase", fontWeight: "bold" }}
              onClick={() => navigate("/register")}
            >
              {t("hero.getStarted")}
            </Button>
          )}
        </Container>
      </Box>

      <Container sx={{ my: 4 }}>
        <HeroCards />
      </Container>

      <CustomDivider title={t("hero.courseSection")} />

      <Box sx={{ my: 4, mx: 4, display: "flex", justifyContent: "center" }}>
        <CoursesShow />
      </Box>

      <CustomDivider title={t("hero.whyUs")} />
      <Box sx={{ my: 4, mx: 4, display: "flex", justifyContent: "center" }}>
        <WhoAreWe />
      </Box>
    </Box>
  );
};

const stickyNavbarStyle = (isScrolled) => ({
  position: "sticky",
  width: "100%",
  top: 0,
  zIndex: 1000,
  backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.8)" : "black",
  transition: "all 0.3s ease, box-shadow 0.3s ease",
  boxShadow: isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
  opacity: isScrolled ? "0.7" : "0.9",
});

const mainSectionStyle = {
  position: "relative",
  backgroundImage: `url(${cover})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "80vh",
  color: "#fff",
  textAlign: "center",
  ":after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
};

export default Hero;
