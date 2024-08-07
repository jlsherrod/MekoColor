import { Link } from "react-router-dom";

export default function EditClient() {
  return (
    <>
      <form className="mt-4 space-y-4 flex-auto columns-2">
        <label className="flex flex-col text-bold text-lg mb-4">
          FIRST NAME
          <input type="text" className="border-2 border-black shadow-sm" />
        </label>
        <label className="flex flex-col text-bold text-lg mb-4">
          LAST NAME
          <input type="text" className="border-2 border-black shadow-sm" />
        </label>
        <label className="flex flex-col text-bold text-lg mb-4">
          PHONE <input type="tel" className="border-2 border-black shadow-sm" />
        </label>
        <label className="flex flex-col text-bold text-lg mb-4">
          EMAIL{" "}
          <input type="email" className="border-2 border-black shadow-sm" />
        </label>
        <div>
          <label className="flex flex-col text-bold text-lg mb-4">
            PIC
            <input type="file" accept="image/jpg" />
          </label>
        </div>{" "}
        <div className="flex">
          <Link to="/" className="ml-auto">
            <button className="w-24 bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body">
              SUBMIT
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
