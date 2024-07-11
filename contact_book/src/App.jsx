import { Suspense, useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import Aside from "./components/static/aside/Aside";
import { AppRouter } from "./router/router";
import Notification from "./utils/Notification";
import { ThemeProvider, createTheme } from "@mui/material";
import { SnackbarUtilitiesConfiguration } from "./utils/snackbar-manager";
import { SnackbarProvider } from "notistack";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <SnackbarProvider>
      <SnackbarUtilitiesConfiguration />
      <Notification />

      <div id={styles.app} className="relative h-screen gap-2">
        <Router>
          <ThemeProvider theme={darkTheme}>
            <aside className="[grid-area:aside] flex flex-col overflow-y-auto">
              <Aside />
            </aside>

            <main className="[grid-area:main] ">
              <Suspense fallback={<> ESTA CARGANDO LA PAGINA!! </>}>
                <AppRouter />
              </Suspense>
            </main>
          </ThemeProvider>
        </Router>
      </div>
    </SnackbarProvider>
  );
}

export default App;
