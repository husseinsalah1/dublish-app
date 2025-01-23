import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store/index.js";
import "./locale/i18n.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f7b61c",
      light: "#f9c94f",
      dark: "#f5a623",
    },
    secondary: {
      main: "#1a85ff",
      light: "#4da6ff",
      dark: "#005cb2",
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
