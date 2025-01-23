import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { FaLanguage, FaLaptopCode, FaBook } from "react-icons/fa";

const courses = [
  {
    icon: <FaLanguage />,
    title: "Language Courses",
    description:
      "Master new languages with our expert-led courses for beginners to advanced learners.",
    animation: "fade-up",
  },
  {
    icon: <FaLaptopCode />,
    title: "Development Courses",
    description:
      "Enhance your coding skills with web, mobile, and software development training.",
    animation: "fade-left",
  },
  {
    icon: <FaBook />,
    title: "ICDL Courses",
    description:
      "Get certified in essential computer skills to improve your career opportunities.",
    animation: "fade-right",
  },
];

const Services = () => {
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
        Our Services
      </Typography>

      {/* Courses Grid */}
      <Grid container spacing={4} sx={{ maxWidth: "1200px", mx: "auto" }}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              data-aos={course.animation}
              sx={{
                textAlign: "center",
                backgroundColor: "white",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                p: 3,
                "&:hover": {
                  transform: "translateY(-8px)",
                  transition: "all 0.3s ease",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                {/* Icon */}
                <Box
                  sx={{
                    color: "#2196f3",
                    fontSize: "48px",
                    mb: 2,
                  }}
                >
                  {course.icon}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    mb: 1,
                  }}
                >
                  {course.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    lineHeight: 1.6,
                    mb: 2,
                  }}
                >
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
