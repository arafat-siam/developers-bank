import React from "react";
import { Router } from "@reach/router";
import Dashboard from "./pages/Dashboard";
import Loan from "./pages/Loan";
import History from "./pages/History";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Router>
      <Dashboard path="/" />
      <Transaction path="/transaction"></Transaction>
      <Loan path="/loan"></Loan>
      <History path="/history"></History>
    </Router>
  );
}

export default App;
