import { Route, Routes } from "react-router-dom";

import "tailwindcss/tailwind.css";

import Clients from "./pages/Clients.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Formulation from "./pages/Formulation.jsx";
import Login from "./pages/Login.jsx";
import NewClient from "./pages/NewClient.jsx";
import NoMatch from "./pages/NoMatch.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients/:id" element={<Clients />} />
        <Route path="/newclient" element={<NewClient />} />
        <Route path="/formulation" element={<Formulation />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
