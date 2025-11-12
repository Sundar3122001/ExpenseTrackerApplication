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

      // Use the email from the form since backend may not return it
      const userEmail = form.email;
      localStorage.setItem("userEmail", userEmail);

      // Notify App that user logged in
      onLogin(userEmail);

      alert("✅ Login successful!");
    } catch (err) {
      console.error(err);
      alert("❌ Invalid credentials!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
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
