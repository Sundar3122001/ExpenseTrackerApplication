import React, { useState } from "react";
import api from "../api/api";

function Register({ onRegister }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);

      // ✅ Save email to localStorage
      localStorage.setItem("email", form.email);

      alert("✅ Registration successful!");
      setForm({ name: "", email: "", password: "" });

      if (onRegister) onRegister();
    } catch (err) {
      console.error(err);
      alert("❌ Error registering user! Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
