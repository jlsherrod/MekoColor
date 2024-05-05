import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditClient from "../components/EditClient.jsx";

export default function Clients() {
  let { id } = useParams();
  console.log(id);
  const [showComponent, setShowComponent] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [client, setClient] = useState({});

  useEffect(() => {
    fetch(`/api/clients/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setClient(data.client).catch((error) => console.error("Error:", error)),
      );
  }, []);
  const handleClick = () => {
    setShowComponent(true);
    setShowButton(false);
  };
  return (
    <>
      <button className="mt-8 ml-8 bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-s font-body">
        <Link to="/">🔙</Link>
      </button>
      <div className="flex flex-col items-center justify-center space-y-8 mt-16">
        <h1 className="font-sans text-2xl">
          {client.first_name.toUpperCase()} {client.last_name.toUpperCase()}
        </h1>
        <div className="w-8/12">
          <img
            className="m-auto border-black border-2"
            src="/headshot.jpg"
          ></img>
          <div className="mt-4 space-y-4 flex-auto columns-2">
            <h2>FIRST NAME</h2>
            <h3>Francis</h3>
            <h2>LAST NAME</h2>
            <h3>Farmer</h3>
            <h2>PHONE</h2>
            <h3>(918)770-8908</h3>
            <h2>EMAIL</h2>
            <h3>francine@gmail.com</h3>
          </div>
          <div className="flex">
            {showButton && (
              <button
                onClick={handleClick}
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
