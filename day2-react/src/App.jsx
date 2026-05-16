import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";
import Navbar from "./Components/Navbar";
import UserDetail from "./Components/UserDetail";
import { ThemeContext } from "./Components/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className={theme === "light" ? "light-mode" : "dark-mode"}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
