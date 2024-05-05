import { Link } from "react-router-dom";
import Formulas from "../components/Formulas.jsx";

export default function Formulation() {
  return (
    <div className="container">
      <button className="mt-8 ml-8 bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-s font-body">
        <Link to="/">🔙</Link>
      </button>
      <div className="flex flex-col items-center justify-center space-y-8 mt-8">
        <h1 className="font-sans text-2xl">FRANCIS FARMER</h1>
        <Formulas />
        <form>
          <div className="mr-auto">
            <label className="flex flex-col text-bold text-lg mb-4">
              FORMULA
              <select className="border-2 border-black shadow-sm w-1/2">
                <option value="highlight">Highlight</option>
                <option value="single-process">Single Process</option>
                <option value="double-process">Double Process</option>
                <option value="gloss">Gloss</option>
              </select>
            </label>
          </div>
          <div className="flex">
            <label className="flex flex-col text-bold text-lg mb-4 w-1/2">
              COLOR
              <input
                type="text"
                className="border-2 border-black shadow-sm w-1/2"
              />
            </label>{" "}
            <label className="flex flex-col text-bold text-lg mb-4">
              WEIGHT
              <input
                type="text"
                className="border-2 border-black shadow-sm w-1/2"
              />
            </label>{" "}
            <button className="px-2 h-8 mt-6 font-bold bg-amber-400 border-2 border-black shadow-sm text-s font-body">
              <Link to="/">＋</Link>
            </button>
          </div>
          <div className="flex">
            <label className="flex flex-col text-bold text-lg mb-4 w-1/2">
              DEVELOPER
              <input
                type="text"
                className="border-2 border-black shadow-sm w-1/2"
              />
            </label>{" "}
            <label className="flex flex-col text-bold text-lg mb-4">
              WEIGHT
              <input
                type="text"
                className="border-2 border-black shadow-sm w-1/2"
              />
            </label>{" "}
            <button className="mpx-2 h-8 mt-6 font-bold bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-s font-body">
              <Link to="/">＋</Link>
            </button>
          </div>
          <div>
            <label className="flex flex-col text-bold text-lg mb-4">
              DURATION
              <input
                type="text"
                className="border-2 border-black shadow-sm w-1/2"
              />
            </label>{" "}
          </div>
          <label className="flex flex-col text-bold text-lg mb-4">
            NOTES
            <input type="text" className="border-2 border-black shadow-sm" />
          </label>
          <button className="flex mt-8 ml-auto bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-s font-body">
            <Link to="/">SUBMIT</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
