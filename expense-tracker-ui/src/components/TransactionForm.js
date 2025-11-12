import React, { useState } from "react";
import api from "../api/api";

function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ title: "", amount: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = localStorage.getItem("email"); // get logged-in email
      if (!email) {
        alert("❌ User email not found! Please login again.");
        return;
      }

      await api.post(`/transactions?email=${email}`, {
        ...form,
        amount: parseFloat(form.amount),
      });

      alert("✅ Transaction added!");
      setForm({ title: "", amount: "" });
      onAdd(); // notify parent to refresh transaction list
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add transaction!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
