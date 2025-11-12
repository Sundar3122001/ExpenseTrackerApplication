import React, { useState } from "react";
import api from "../api/api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" }); // ✅ use email

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token); // save JWT if backend returns it
      alert("Login successful!");
    } catch (err) {
      console.error(err); // helps debug backend errors
      alert("Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
