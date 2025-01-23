import { Box, Typography, IconButton, Grid2, Container } from "@mui/material";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaSnapchat,
} from "react-icons/fa";
import { logo } from "@/assets/images/index";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        background: "black",
        color: "white",
        py: 6,
      }}
    >
      <Container>
        {/* Content Container */}
        <Grid2
          container
          spacing={6}
          sx={{
            maxWidth: "100%",
            mx: "auto",
            px: { xs: 2, sm: 4 },
          }}
        >
          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Box
                component="img"
                src={logo}
                width={150}
                sx={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#aaa",
                  mt: 2,
                  fontSize: "14px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {t("footer.title")}
              </Typography>
            </Box>
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",

                color: "primary.main",
              }}
            >
              {t("footer.links")}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {t("footer.explores", { returnObjects: true }).map(
                (link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    onClick={() => window.scrollTo(0, 0)}
                    style={modernLinkStyle}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </Box>
          </Grid2>

          <Grid2 item size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "18px",
                mb: 2,
                color: "primary.main",
              }}
            >
              {t("footer.social")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: 2,
              }}
            >
              {socialIcons.map(({ href, icon: Icon }, idx) => (
                <IconButton
                  key={idx}
                  component="a"
                  href={href}
                  target="_blank"
                  sx={modernIconStyle}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          mt: 6,
          pt: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "#888", fontSize: "14px" }}>
          {t("footer.rights")}
        </Typography>
      </Box>
    </Box>
  );
};

// Link and Icon styles
const modernLinkStyle = {
  color: "#bbb",
  fontSize: "14px",
  textDecoration: "none",
  marginBottom: 1.5,
  transition: "color 0.3s ease",
  margin: "2px 0px",
};

const modernIconStyle = {
  color: "#bbb",
  fontSize: "22px",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "primary.main",
  },
};

// Social Media Links
const socialIcons = [
  { href: "https://wa.me/yourwhatsapplink", icon: FaWhatsapp },
  { href: "https://www.linkedin.com/yourprofile", icon: FaLinkedin },
  { href: "https://www.instagram.com/yourprofile", icon: FaInstagram },
  { href: "https://www.snapchat.com/add/yourprofile", icon: FaSnapchat },
];

export default Footer;
