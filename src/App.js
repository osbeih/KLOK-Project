import Dashboard from "./dashboard/dashboard";
import "./App.css";

import Register from "./components/register";
import ProtectedRoute from "./ProtectedRoute";

import { useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register setLogin={setLogin} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute login={login}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
