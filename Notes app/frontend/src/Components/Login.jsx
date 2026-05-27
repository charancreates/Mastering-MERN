import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  async function userLogin(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", form);
      localStorage.setItem("token", res.data.token);
      setForm({ name: "", email: "", password: "" });
      navigate("/notes");
      toast.success("logged in ");
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-8">Register</h1>
      <form
        onSubmit={userLogin}
        className="flex flex-col items-center gap-6 text-xl">
        <label className="flex flex-col gap-2 w-72">
          Email
          <input
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            type="email"
            className="bg-cyan-400/30 rounded-2xl text-white px-4 py-2 border border-amber-400 focus:outline-none focus:border-amber-200"
          />
        </label>

        <label className="flex flex-col gap-2 w-72">
          Password
          <input
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            className="bg-cyan-400/30 rounded-2xl text-white px-4 py-2 border border-amber-400 focus:outline-none focus:border-amber-200"
          />
        </label>

        <button
          type="submit"
          className="bg-amber-400 text-black font-bold py-2 px-6 rounded-2xl mt-4 hover:bg-amber-300 transition-colors">
          Login
        </button>
      </form>
    </div>
  );
}
