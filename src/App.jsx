import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AllRoutes from "./routes";
import "@splidejs/react-splide/css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation(); // Get i18n instance
  const currentLang = i18n.language; // Get the current language

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
    });
  }, []);

  return (
    <div style={{ direction: currentLang === "ar" ? "rtl" : "ltr" }}>
      <ToastContainer />
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
};

export default App;
