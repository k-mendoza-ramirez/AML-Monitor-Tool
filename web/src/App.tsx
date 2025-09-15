// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Transactions from "./pages/Transactions";
import Users from "./pages/Users";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/users" element={<Users />} />
        {/* optional 404 */}
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}