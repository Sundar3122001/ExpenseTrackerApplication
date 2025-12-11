import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const { login } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <LoginForm onSuccess={(email) => login(email)} />
        </div>
      </div>
    </div>
  );
}
