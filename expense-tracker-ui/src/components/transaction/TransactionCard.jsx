import React from "react";

export default function TransactionCard({ t }) {
  return (
    <div className="p-3 border rounded flex justify-between items-center">
      <div>
        <div className="font-medium">{t.title}</div>
        <div className="text-sm text-gray-500">{t.category} • {t.date}</div>
      </div>
      <div className={`font-bold ${t.type === "income" ? "text-green-600" : "text-red-600"}`}>
        ₹{t.amount}
      </div>
    </div>
  );
}
