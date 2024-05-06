import { useState } from "react";
import "./App.css";
import Dashboard from "./component/Dashboard";
import BaseContext from "./context/BaseContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const clickMe = () => {
    console.log("Clicked");
  };

  const [theme, setTheme] = useState("Yellow");

  return (
    <BaseContext.Provider value={clickMe}>
      <ThemeContext.Provider value={theme}>
        <Dashboard></Dashboard>
      </ThemeContext.Provider>
    </BaseContext.Provider>
  );
}

export default App;
