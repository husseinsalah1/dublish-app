import { Box, Typography, Button } from "@mui/material";
import networkError from "../assets/animation/networkError.json";
import LottieAnimation from "../components/animation/lottieAnimation";
import { useNavigate } from "react-router-dom";

const NetworkException = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt={10}>
      <LottieAnimation animationData={networkError} />
      <Typography variant="h5" color="error" gutterBottom>
        Please check your internet connection and try again
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
          sx={{ width: 150 }}
        >
          Back & Retry
        </Button>
      </Box>
    </Box>
  );
};

export default NetworkException;
