// import { useState } from "react";
import "./App.css";
// import Login from "./Components/Login";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./Components/Login";
import Notes from "./Components/Notes";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
