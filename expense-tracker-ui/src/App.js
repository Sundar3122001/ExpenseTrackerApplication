import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (userEmail) => {
    setEmail(userEmail);
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <>
          <Register />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <>
          <h2>Welcome!</h2>
          <button
            onClick={() => {
              setLoggedIn(false);
              setEmail("");
            }}
          >
            Logout
          </button>
          <TransactionForm email={email} onAdd={() => {}} />
          <TransactionList email={email} />
        </>
      )}
    </div>
  );
}

export default App;
