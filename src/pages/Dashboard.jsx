import { Link } from "react-router-dom";
import Appointments from "../components/Appointments.jsx";
import NewClientButton from "../components/NewClientButton.jsx";
import Search from "../components/Search.jsx";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-16">
      <h1 className="font-sans font-bold text-2xl">WELCOME</h1>
      <div className="flex flex-col justfy-between">
        <Search />
        <NewClientButton />
        <Appointments />
        <Link to="/" className="ml-auto">
          <button className="bg-amber-400 border-2 border-black shadow-sm mt-16 p-1 px-2 text-xs font-body">
            LOGOUT
          </button>
        </Link>
        <Link to="/Clients" className="ml-auto ">
          <button className="bg-amber-400 border-2 border-black shadow-sm mt-16 p-1 px-2 text-xs font-body">
            TO CLIENTS
          </button>
        </Link>
      </div>
    </div>
  );
}
