import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import './App.css';  // Ensure this has theme styles
import { useTheme } from './context/ThemeContext';

function App() {
  const { themeStyles } = useTheme();

  return (
    <div
      style={{
        background: themeStyles.backgroundColor,
        color: themeStyles.color
      }}
    >
      <Header />
      <div id="home"><Home /></div> {/* Add IDs to your sections */}
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
