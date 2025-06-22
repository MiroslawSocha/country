import { useState } from "react";

import Appbar from "./components/Appbar/Appbar";
import Sidebar from "./components/Sidebar/Sidebar";

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
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerState = (state: boolean) => {
    setDrawerState(state);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Appbar onClick={handleDrawerState} drawerState={drawerState} />
        <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
