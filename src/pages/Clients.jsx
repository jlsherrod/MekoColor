import { Link } from "react-router-dom";

export default function Clients() {
  return (
    <>
      <button className="mt-8 ml-8 bg-amber-400 border-2 border-black shadow-sm p-1 px-2 text-s font-body">
        <Link to="/">🔙</Link>
      </button>
      <div className="flex flex-col items-center justify-center space-y-8 mt-16">
        <h1 className="font-sans text-2xl">FRANCIS FARMER</h1>
        <div className="w-8/12">
          <img
            className="m-auto border-black border-2"
            src="/headshot.jpg"
          ></img>
          <div className="mt-4 space-y-4 flex-col columns-2 w-8/12">
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
            <button className="w-24 ml-auto bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body">
              <Link to="/">EDIT</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
