import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import Routes from "./Routes";

import "./styles/_base.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f2aa26",
      dark: "#f09c01",
    },
    secondary: {
      main: "#11cb5f",
    },
    text: {
      primary: "#373585",
      secondary: "#a4a6b3",
    },
    background: {
      default: "#f7f8fc",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 400,
    htmlFontSize: 8,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
