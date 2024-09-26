import React, { useContext } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Technology from './components/Technology';

import './App.css';  // Ensure this has theme styles
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme, toggleTheme, themeStyles } = useTheme();
  return (
    <div
      style={{
        background: themeStyles.backgroundColor,
        color: themeStyles.color
      }}
    >  {/* Apply the theme as a class */}
      <Header />
      <Home />
      {/* <Technology /> */}
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
