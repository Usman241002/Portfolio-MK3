import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./components/App";

const theme = createTheme({
  palette: {
    primary: {
      main: "#125A8E",
    },
    secondary: {
      main: "#D9D9D9",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
