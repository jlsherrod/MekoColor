import { Link } from "react-router-dom";
import Formulas from "../components/Formulas.jsx";

export default function Formulation() {
  return (
    <>
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
              <input
                type="text"
                className="border-2 border-black shadow-sm"
                placeholder="Dropdown?"
              />
            </label>
          </div>
          <div className="columns-2">
            <label className="flex flex-col text-bold text-lg mb-4">
              COLOR
              <input type="text" className="border-2 border-black shadow-sm" />
            </label>{" "}
            <label className="flex flex-col text-bold text-lg mb-4">
              WEIGHT
              <input type="text" className="border-2 border-black shadow-sm" />
            </label>{" "}
            <label className="flex flex-col text-bold text-lg mb-4">
              DEVELOPER
              <input type="text" className="border-2 border-black shadow-sm" />
            </label>{" "}
            <label className="flex flex-col text-bold text-lg mb-4">
              WEIGHT
              <input type="text" className="border-2 border-black shadow-sm" />
            </label>{" "}
            <label className="flex flex-col text-bold text-lg mb-4">
              DURATION
              <input type="text" className="border-2 border-black shadow-sm" />
            </label>{" "}
            <label className="flex flex-col text-bold text-lg mb-4">
              NOTES
              <input type="text" className="border-2 border-black shadow-sm" />
            </label>
          </div>
          <button className="flex mt-8 ml-auto bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-s font-body">
            <Link to="/">SUBMIT</Link>
          </button>
        </form>
      </div>
    </>
  );
}
