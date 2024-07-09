import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactSearchBox from "react-search-box";

export default function NavBar() {
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
    navigate(`/clients/${record.item.id}`);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal p-6">
      <div className="flex">
        <Link to="/dashboard">
          <img
            className="max-w-10 border-2 border-black shadow-black"
            src="/catface.jpg"
            alt="logo"
          />
        </Link>
        <div className="ml-4">
          <ReactSearchBox
            fuseConfigs={{ keys: ["first_name", "last_name"] }}
            placeholder="Search Clients"
            data={clients}
            onSelect={handleSearch}
            leftIcon=<>🔎</>
            inputBorderColor="black"
          />
        </div>
      </div>
      <Link to="/NewClient">
        <button className="px-2 h-8 font-bold bg-amber-400 border-2 border-black shadow-sm text-s font-body">
          ＋{" "}
        </button>
      </Link>
    </nav>
  );
}
