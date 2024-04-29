import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="">
      <h1>HI THERE</h1>
      <button className="ml-auto bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body">
        <Link to="/Clients">CLIENTS HERE</Link>
      </button>
    </div>
  );
}
