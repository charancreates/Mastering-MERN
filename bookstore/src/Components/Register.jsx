import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function Register() {
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  async function userRegister(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/register",
        fields
      );
      localStorage.setItem("token", res.data.token);
      setFields({ name: "", email: "", password: "" });
      navigate("/books");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  return (
    <>
      <form
        onSubmit={userRegister}
        className="flex flex-col itms-center justify-center p-40 gap-4">
        <h2>Register</h2>
        <label className="flex gap-4 text-white text-xl font-bold">
          Name
          <input
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            value={fields.name}
            className="bg-gray-800 rounded-xl border text-xs w-80 h-9 px-3 "
          />
        </label>
        <label className="flex gap-4 text-white text-xl font-bold">
          Email
          <input
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            value={fields.email}
            className="bg-gray-800 rounded-xl border text-xs w-80 h-9 px-3  "
          />
        </label>
        <label className="flex gap-4 text-white text-xl font-bold">
          Password
          <input
            onChange={(e) => setFields({ ...fields, password: e.target.value })}
            value={fields.password}
            className="bg-gray-800 rounded-xl border text-xs w-80 h-9 px-3  "
          />
        </label>
        <button
          type="Submit"
          className="bg-gray-800 p-2 rounded-3xl border text-white">
          Register
        </button>
        <Link to="/login" className="text-grey-800 hover:text-cyan-600">
          Already registered? login
        </Link>
      </form>
    </>
  );
}
