import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

export default function CustomThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(() => {   //used to control dark mode
    setIsDark((prev) => !prev);
  }, []);

  const theme = createTheme({   //the actual custom theme comes here.
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleDarkMode, isDark }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
export const useTheme = () => {   // provides access to the toggleDarkmode method via  the value of the ThemeContext provider.
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a Provider");
  return context;
};
// useContext returns a direct reference to the value object. so its kind of like a complicated way to passa global parameter.