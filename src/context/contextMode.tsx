import React, { useContext, useLayoutEffect, useEffect } from "react";
import theme from "../ui/theme";
const {palette}=theme



interface ThemeContextProps {
    themeColor: string;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [themeColor, setThemeColor] = React.useState(".commun");
    
    
  const toggleTheme = () => {
    themeColor === "light" ? setThemeColor("dark") : setThemeColor("light");
  };

  useEffect(() => {
    if (themeColor === "dark") {
      document.body.style.backgroundColor = "#FFF";
    } else if (themeColor === "light") {
      document.body.style.backgroundColor = "#3c3c3c";
    }
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useThemeContext do not provide ${context}`);
  }

  return context;
}
