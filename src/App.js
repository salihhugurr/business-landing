import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import i18next from "i18next";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "scenes/layout";
import Home from "scenes/home";
import About from "scenes/about";
import Contact from "scenes/contact";
import Projects from "scenes/projects";
import { initReactI18next } from "react-i18next";
import { translationEn } from "languages/translationEn";
import { translationTr } from "languages/translationTr";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    tr: { translation: translationTr },
  },
  lng: "tr",
  fallBackLng: "tr",
  interpolation: { escapeValue: false },
});

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to={"/home"} replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
