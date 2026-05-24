import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
export default function Login() {
  const [fields, setFields] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  async function userLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", fields);
      localStorage.setItem("token", res.data.token);
      setFields({ email: "", password: "" });
      navigate("/books");
      toast.success("logged in ");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <>
      <form
        onSubmit={userLogin}
        className="flex flex-col itms-center justify-center p-40 gap-4">
        <h2>Login</h2>
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
          Login
        </button>
        <Link to="/register" className="text-grey-800 hover:text-cyan-600">
          new? register here
        </Link>
      </form>
    </>
  );
}
