import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [userEmail, setUserEmail] = useState(
    () => localStorage.getItem("userEmail") || null
  );

  useEffect(() => {
    if (userEmail) localStorage.setItem("userEmail", userEmail);
    else localStorage.removeItem("userEmail");
  }, [userEmail]);

  const login = (email) => setUserEmail(email);
  const logout = () => setUserEmail(null);

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
