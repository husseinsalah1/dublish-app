import { Box, Typography, Card, CardContent } from "@mui/material";

const ServiceCard = ({ icon, title, description, animation }) => {
  return (
    <Card
      data-aos={animation}
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
          {icon}
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
          {title}
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
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
