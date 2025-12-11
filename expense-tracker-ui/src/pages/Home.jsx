import React from "react";
// import LoginForm from "../components/auth/LoginForm";
// import RegisterForm from "../components/auth/RegisterForm";
import useAuth from "../hooks/useAuth";

import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";


export default function Home() {
  const { login } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl w-full p-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <LoginForm onSuccess={(email) => login(email)} />
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Register</h2>
          <RegisterForm onSuccess={(email) => login(email)} />
        </div>
      </div>
    </div>
  );
}
