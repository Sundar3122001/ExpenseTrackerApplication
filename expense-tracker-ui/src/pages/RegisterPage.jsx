import React from "react";
import RegisterForm from "../components/Auth/RegisterForm";
import useAuth from "../hooks/useAuth";

export default function RegisterPage() {
  const { login } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">Create account</h2>
          <RegisterForm onSuccess={(email) => login(email)} />
        </div>
      </div>
    </div>
  );
}
