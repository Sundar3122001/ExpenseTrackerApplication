import React, { useEffect, useState } from "react";
import api from "../api/api";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const userEmail = localStorage.getItem("userEmail"); // get email

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await api.get("/transactions", {
          params: { email: userEmail }, // pass email as query param
        });
        setTransactions(res.data);
      } catch (err) {
        console.error("Failed to fetch transactions ❌", err);
      }
    };

    if (userEmail) fetchTransactions();
  }, [userEmail]);

  if (transactions.length === 0) return <p>No transactions yet!</p>;

  return (
    <div>
      <h3>Your Transactions</h3>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.title} - {t.amount} - {t.category} - {t.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
