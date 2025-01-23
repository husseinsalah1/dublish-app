import { useState, useEffect } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { isTokenValid } from "@/utils/token";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./style.css";

const Navbar = ({ color }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for language menu

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Set initial language from localStorage or default to "en"
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang); // Ensure i18n uses the stored language
    }
  }, [i18n]);

  useEffect(() => {
    const authToken = isTokenValid();
    setIsAuthenticated(!!authToken);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/login");
  };

  const handleLanguageMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language in i18n
    localStorage.setItem("lang", lang); // Save selected language to localStorage
    setAnchorEl(null); // Close the menu
  };

  return (
    <Box>
      <Toolbar>
        {/* Mobile Menu Icon */}
        <IconButton
          color="black"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
          onClick={handleDrawerToggle}
        >
          <MenuIcon
            style={{
              color: "white",
            }}
          />
        </IconButton>

        {/* Desktop Menu */}
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("navbarItems", { returnObjects: true }).map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="nav-link"
                style={{ color: color }}
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <span
                onClick={handleLogout}
                className="nav-link"
                style={{ color: color, cursor: "pointer" }}
              >
                {t("logout")}
              </span>
            ) : (
              <>
                <Link to="/login" className="nav-link" style={{ color: color }}>
                  {t("login")}
                </Link>
                <Link
                  to="/register"
                  className="nav-link"
                  style={{ color: color }}
                >
                  {t("register")}
                </Link>
              </>
            )}
          </Typography>
        </Box>

        {/* Language Selector */}
        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <IconButton
            onClick={handleLanguageMenuOpen}
            aria-controls="language-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <img
              src={`https://flagcdn.com/w40/${
                i18n.language === "en" ? "gb" : "eg"
              }.png`}
              alt="flag"
              style={{ width: 24, height: 16, marginRight: 8 }}
            />
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleLanguageChange("en")}>
              <img
                src="https://flagcdn.com/w40/gb.png"
                alt="English"
                style={{ width: 24, height: 16, marginRight: 8 }}
              />
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("ar")}>
              <img
                src="https://flagcdn.com/w40/eg.png"
                alt="Arabic"
                style={{ width: 24, height: 16, marginRight: 8 }}
              />
              Arabic
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              p: 2,
            }}
          >
            <IconButton onClick={handleDrawerToggle} aria-label="Close">
              <IoMdClose />
            </IconButton>
          </Box>
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "start" }}>
            <List>
              {t("navbarItems", { returnObjects: true }).map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="nav-link"
                  style={{ color: color, display: "block", padding: "0" }}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <span
                  onClick={handleLogout}
                  className="nav-link"
                  style={{ color: color, cursor: "pointer" }}
                >
                  {t("logout")}
                </span>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="nav-link"
                    style={{ color: color }}
                  >
                    {t("login")}
                  </Link>
                  <Link
                    to="/register"
                    className="nav-link"
                    style={{ color: color }}
                  >
                    {t("register")}
                  </Link>
                </>
              )}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
