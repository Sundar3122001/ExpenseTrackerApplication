import React, { useState } from "react";
import api from "../api/api";

function TransactionForm({ email, onAdd }) {
  const [form, setForm] = useState({ title: "", amount: "", category: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await api.post(`/transactions?email=${email}`, form);
      alert("✅ Transaction added!");
      setForm({ title: "", amount: "", category: "" });
      onAdd(); // refresh transaction list
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add transaction!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
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
      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TransactionForm;
