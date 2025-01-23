// theme.js or customTheme.js
import { extendTheme } from "@chakra-ui/react"; // Correct import

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#e9f5ff",
      100: "#b3d8ff",
      200: "#80bbff",
      300: "#4da0ff",
      400: "#1a85ff",
      500: "#0068d4", // Primary color
      600: "#004b9b",
      700: "#003668",
      800: "#00253b",
      900: "#001120",
    },
  },
  // You can add other theme configurations like fontSizes, breakpoints, etc.
});

export default customTheme;
