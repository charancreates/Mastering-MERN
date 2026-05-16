import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="Users"> Users </NavLink>
        <NavLink to="About"> About </NavLink>
        <button onClick={toggleTheme}>Change Theme</button>
      </nav>
    </>
  );
}
