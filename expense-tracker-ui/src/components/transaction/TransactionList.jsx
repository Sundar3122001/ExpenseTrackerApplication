import React from "react";
import TransactionCard from "./TransactionCard";

export default function TransactionList({ transactions }) {
  if (!transactions || transactions.length === 0)
    return <div className="bg-white p-6 rounded shadow">No transactions yet.</div>;

  return (
    <div className="bg-white p-6 rounded shadow space-y-3">
      {transactions.map((t) => (
        <TransactionCard key={t.id} t={t} />
      ))}
    </div>
  );
}
