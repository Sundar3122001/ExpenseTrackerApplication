import React, { useState, useEffect } from "react";
import api from "../api/api";

function TransactionList({ refresh }) {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    try {
      const email = localStorage.getItem("email"); // get logged-in email
      if (!email) return;

      const res = await api.get(`/transactions?email=${email}`);
      setTransactions(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to fetch transactions!");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [refresh]); // refresh whenever parent triggers

  return (
    <div>
      <h2>Your Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions yet!</p>
      ) : (
        <ul>
          {transactions.map((t) => (
            <li key={t.id}>
              {t.title} - ${t.amount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
