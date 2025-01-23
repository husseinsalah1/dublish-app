import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {!isHome && (
        <Box
          sx={{
            borderBottom: "1px solid #ccc",
          }}
        >
          <Navbar color={"black"} />
        </Box>
      )}
      <Box
        component="main"
        sx={{
          flex: "1 0 auto",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        {children}
      </Box>
      <Box
        component="footer"
        sx={{
          flexShrink: 0,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
