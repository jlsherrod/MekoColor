import { Link, Outlet, Route, Routes } from "react-router-dom";

import "tailwindcss/tailwind.css";

import Clients from "./pages/Clients.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import NoMatch from "./pages/NoMatch.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
