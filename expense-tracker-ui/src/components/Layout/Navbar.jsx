import React from "react";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { userEmail, logout } = useAuth();
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-xl font-semibold">ExpenseTracker</div>
      <div>
        {userEmail ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">{userEmail}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
