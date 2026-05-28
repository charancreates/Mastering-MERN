import "./App.css";
import Books from "./Components/Books";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Components/ProtectedRoute";
// import { io } from "socket.io-client";

function App() {
  // const socket = io("http://localhost:3000");
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
