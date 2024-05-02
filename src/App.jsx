import { Link, Outlet, Route, Routes } from "react-router-dom";

import "tailwindcss/tailwind.css";

import Clients from "./pages/Clients.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Formulation from "./pages/Formulation.jsx";
import Login from "./pages/Login.jsx";
import NoMatch from "./pages/NoMatch.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/Formulation" element={<Formulation />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
