import React from "react";
import useAuth from "../hooks/useAuth";
import useTransactions from "../hooks/useTransactions";
import Navbar from "../components/Layout/Navbar";
import TransactionForm from "../components/transaction/TransactionForm";
import TransactionList from "../components/transaction/TransactionList";

export default function Dashboard() {
  const { userEmail } = useAuth();
  const { transactions, fetch, loading } = useTransactions(userEmail);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Welcome to Expense Tracker</h1>
          <p className="text-gray-600">Manage your expenses quickly</p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <TransactionForm email={userEmail} onAdded={fetch} />
          <div>
            {loading ? (
              <div className="p-6 bg-white rounded shadow">Loading...</div>
            ) : (
              <TransactionList transactions={transactions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
