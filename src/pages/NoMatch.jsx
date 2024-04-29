import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 mt-16">
      <h1 className="font-sans font-bold text-2xl">
        SORRY BUT THIS PAGE DOES NOT EXIST
      </h1>
      <Link to="/">RETURN HOME</Link>
    </div>
  );
}
