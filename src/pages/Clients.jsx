import { Link } from "react-router-dom";

export default function Clients() {
  return (
    <div>
      <h1>AND THIS IS WHERE THE CLIENT INFO GOES...</h1>
      <button className="ml-auto bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body">
        <Link to="/">HEAD ON HOME</Link>
      </button>
    </div>
  );
}
