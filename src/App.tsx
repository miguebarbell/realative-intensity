import React, { useState } from 'react';
import GlobalStyle from "./global";
import Convert from "./pages/convert";
import {About} from "./pages/about"
import {Header} from "./components/header";
import useDarkMode from "./hook/useDarkMode";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
  return (
      <Router>
      <GlobalStyle/>
          <Routes>
              <Route path="/" element={<Convert dark={isDarkMode}/>}/>
              <Route path="/about" element={<About dark={isDarkMode}/>}/>
          </Routes>
    </Router>
  );
}

export default App;
