import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "./redux";
import { ThemeProvider, createTheme } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./pages/Home";

function App() {
  const { store } = createStore();

  const theme = createTheme({
    typography: {
      fontFamily: "Open Sans",
      subtitle1:{
        fontFamily:"OpenSans-Bold",
        fontSize: 24,
      },
      subtitle2:{
        fontFamily:"OpenSans-Bold",
        fontSize: 18,
      },
      h1:{
        fontSize: 26,
      },
      h2:{
        fontSize: 16,
      },
    },
    palette: {
      primary: {
        main: "#CB0D1F",
      },
      secondary: {
        main: "#00A8A9",
      },
      text: {
        primary:"#CB0D1F",
        secondary:"#00A8A9",
        disabled:"##626262",
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <CssBaseline />
        <Router>
          <Home />
        </Router>
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;