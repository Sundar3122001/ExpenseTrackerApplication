import React, { useState } from "react";
import { addTransaction } from "../../api/transactions";

export default function TransactionForm({ email, onAdded }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    type: "expense",
    date: new Date().toISOString().slice(0, 10),
  });
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // ensure required fields: date & type
      if (!form.date) form.date = new Date().toISOString().slice(0, 10);
      await addTransaction(email, {
        title: form.title,
        amount: Number(form.amount),
        category: form.category,
        type: form.type,
        date: form.date,
      });
      setForm({
        title: "",
        amount: "",
        category: "",
        type: "expense",
        date: new Date().toISOString().slice(0, 10),
      });
      if (onAdded) onAdded();
    } catch (err) {
      console.error(err);
      alert("Failed to add");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Add Transaction</h3>
      <form onSubmit={submit} className="space-y-3">
        <input
          name="title"
          value={form.title}
          onChange={handle}
          placeholder="Title"
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          name="amount"
          value={form.amount}
          onChange={handle}
          type="number"
          placeholder="Amount"
          required
          className="w-full px-3 py-2 border rounded"
        />
        <input
          name="category"
          value={form.category}
          onChange={handle}
          placeholder="Category"
          className="w-full px-3 py-2 border rounded"
        />

        <div className="flex space-x-2">
          <select
            name="type"
            value={form.type}
            onChange={handle}
            className="px-3 py-2 border rounded"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handle}
            className="px-3 py-2 border rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Adding..." : "Add Transaction"}
        </button>
      </form>
    </div>
  );
}
