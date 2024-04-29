import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-16">
      <h1 className="font-sans font-bold text-2xl">MEKO COLOR</h1>
      <img
        className="max-w-36 border-2 border-black shadow-sm"
        src="/catface.jpg"
      ></img>
      <h2 className="font-sans font-bold text-2xl">PASSWORD?</h2>
      <div className="flex flex-col justfy-between">
        <input
          className="border-2 border-black shadow-sm"
          type="password"
          placeholder="Just hit the button..."
        />
        <button className="ml-auto bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body">
          <Link to="/Dashboard">LOGIN</Link>
        </button>
      </div>
    </div>
  );
}
