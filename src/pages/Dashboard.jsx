import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center space-y-8 mt-8">
        <h1 className="font-sans font-bold text-2xl">WELCOME</h1>
      </div>
    </>
  );
}
