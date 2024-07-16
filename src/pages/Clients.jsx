import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddFormulaForm from "../components/AddFormulaForm.jsx";
import ClientFormulas from "../components/ClientFormulas.jsx";
import EditClient from "../components/EditClient.jsx";
import NavBar from "../components/NavBar.jsx";

export default function Clients() {
  const { id } = useParams(); //Get id from URL params
  const [showComponent, setShowComponent] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/clients/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setClient(data.client);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleFormulaAdded = () => {
    setRefreshTrigger(refreshTrigger + 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!client) {
    return <div>No client found</div>;
  }

  const openEdit = () => {
    setShowComponent(true);
    setShowButton(false);
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center space-y-8 mt-8">
        <h1 className="font-sans text-2xl">
          {client.first_name ? client.first_name.toUpperCase() : "N/A"}{" "}
          {client.last_name ? client.last_name.toUpperCase() : "N/A"}
        </h1>
        <div className="w-8/12">
          <AddFormulaForm id={id} onFormulaAdded={handleFormulaAdded} />
          <label className="flex flex-col text-bold text-lg mb-4 mt-4">
            PREVIOUS
            <div className="bg-white border-2 border-black shadow-sm p-1">
              <ClientFormulas id={id} refreshTrigger={refreshTrigger} />
            </div>
          </label>
          <div className="flex justify-end">
            <button className="w-24 ml-auto bg-amber-400 border-2 border-black shadow-sm mt-2 p-1 px-2 text-xs font-body">
              COPY PREV
            </button>
          </div>
        </div>
        <div className="w-8/12 mb-8">
          <img
            className="m-auto border-black border-2"
            src="/headshot.jpg"
          ></img>{" "}
          <div className="mt-4 space-y-4 flex-auto columns-2">
            <h2 className="text-gray-500">FIRST NAME</h2>
            <h3>{client.first_name || "N/A"}</h3>
            <h2 className="text-gray-500">LAST NAME</h2>
            <h3>{client.last_name || "N/A"}</h3>
            <h2 className="text-gray-500">PHONE</h2>
            <h3>{client.tel || "N/A"}</h3>
            <h2 className="text-gray-500">EMAIL</h2>
            <h3>{client.email || "N/A"}</h3>
          </div>
          <div className="flex flex-col">
            {showButton && (
              <button
                onClick={openEdit}
                className="w-24 ml-auto bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body"
              >
                EDIT
              </button>
            )}
          </div>
          {showComponent && <EditClient />}
        </div>
      </div>
    </>
  );
}
