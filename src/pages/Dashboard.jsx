import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import Appointments from "../components/Appointments.jsx";
import NewClient from "../components/NewClient.jsx";

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const [showComponent, setShowComponent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => setClients(formatClientData(data.clients)))
      .catch((error) => console.error("Error:", error));
  }, []);

  const formatClientData = (clients) => {
    return clients.map((client) => ({
      key: `client_${client.id}`,
      id: client.id,
      first_name: `${client.first_name}`,
      last_name: `${client.last_name}`,
      value: `${client.first_name} ${client.last_name}`.trim(),
    }));
  };

  const handleSearch = (record) => {
    navigate(`/clients/${record.item.id}`);
  };

  const openNewClient = () => {
    setShowComponent(true);
    setShowButton(false);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-16">
      <h1 className="font-sans font-bold text-2xl">WELCOME</h1>
      <div className="flex flex-col justfy-between">
        <ReactSearchBox
          fuseConfigs={{ keys: ["first_name", "last_name"] }}
          placeholder="Search Clients"
          data={clients}
          onSelect={handleSearch}
          leftIcon=<>🔎</>
        />
        <div className="flex">
          {showButton && (
            <button
              onClick={openNewClient}
              className="w-24 ml-auto bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body"
            >
              NEW CLIENT
            </button>
          )}
        </div>
        {showComponent && <NewClient />}

        <Appointments />
        <div className="flex flex-col space-y-4">
          <Link to="/" className="ml-auto">
            <button className="ml-auto bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-xs font-body">
              LOGOUT
            </button>
          </Link>
          <Link to="/Formulation" className="ml-auto">
            <button className="bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-xs font-body">
              TO FORMULATION
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
