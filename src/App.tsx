import React, { useState } from 'react';
import GlobalStyle from "./global"
import Convert from "./pages/convert"
import {Header} from "./components/header"
import useDarkMode from "./hook/useDarkMode"

function App() {
    const [isDarkMode, setIsDarkMode] = useDarkMode();
  return (
    <>
      <GlobalStyle/>
        <Convert/>
    </>
  );
}

export default App;
