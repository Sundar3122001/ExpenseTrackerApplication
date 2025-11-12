// src/components/Login.js
import React, { useState } from "react";
import api from "../api/api";

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      if (res.data) {
        localStorage.setItem("token", res.data.token || "");
        alert("✅ Login successful!");
        setForm({ email: "", password: "" });
        onLogin(); // ✅ trigger App to show Transaction UI
      }
    } catch (err) {
      console.error(err);
      alert("❌ Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
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
