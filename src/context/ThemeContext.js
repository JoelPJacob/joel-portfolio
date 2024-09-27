
import React, { useState, useEffect, createContext, useContext } from "react";

// Create a context for the theme
const ThemeContextToggler = createContext();

 const lightTheme = {
    backgroundColor: "#F2F5F9",
    bg:'#fff',
    color: "#000000"
  };
  
   const darkTheme = {
    backgroundColor: "#000",
    bg:'#2e2d29',
    color: "#ffffff"
  };

export const useTheme = () => useContext(ThemeContextToggler);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    console.log('fghgh');
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Persist theme
  };

  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContextToggler.Provider value={{ theme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContextToggler.Provider>
  )
}