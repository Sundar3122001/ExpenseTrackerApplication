import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [refresh, setRefresh] = useState(0); // to trigger list reload

  const handleLogin = () => setLoggedIn(true);

  return (
    <div>
      {!loggedIn ? (
        <>
          <Register />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <>
          <TransactionForm onAdd={() => setRefresh((r) => r + 1)} />
          <TransactionList refresh={refresh} />
        </>
      )}
    </div>
  );
}

export default App;
