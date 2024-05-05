import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactSearchBox from "react-search-box";
import Appointments from "../components/Appointments.jsx";
import NewClientButton from "../components/NewClientButton.jsx";
export default function Dashboard() {
  const [clients, setClients] = useState([]);
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
    console.log(record);
    navigate(`/clients/${record.item.id}`);
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
        <NewClientButton />
        <Appointments />
        <div className="flex flex-col space-y-8">
          <Link to="/" className="ml-auto">
            <button className="bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-xs font-body">
              LOGOUT
            </button>
          </Link>
          <Link to="/Clients" className="ml-auto ">
            <button className="bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-xs font-body">
              TO CLIENTS
            </button>
          </Link>
          <Link to="/Formulation" className="ml-auto ">
            <button className="bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-xs font-body">
              TO FORMULATION
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
