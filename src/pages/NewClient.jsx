import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function NewClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState();
  const [email, setEmail] = useState("");
  const handleNewClient = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          tel: tel,
          email: email,
        }),
      });
      if (response.ok) {
        console.log("Client created successfully");
        setFirstName(""); // Clear input field after successful submission
        setLastName(""); // Clear input field after successful submission
        setTel(""); // Clear input field after successful submission
        setEmail(""); // Clear input field after successful submission
      } else {
        console.error("Failed to create client");
      }
    } catch (error) {
      console.error("Error creating client:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container p-4">
        <form
          onSubmit={handleNewClient}
          className="mt-4 space-y-4 flex-auto columns-2"
        >
          <label className="flex flex-col text-bold text-lg mb-4">
            FIRST NAME
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border-2 border-black shadow-sm"
            />
          </label>
          <label className="flex flex-col text-bold text-lg mb-4">
            LAST NAME
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="border-2 border-black shadow-sm"
            />
          </label>
          <label className="flex flex-col text-bold text-lg mb-4">
            PHONE{" "}
            <input
              type="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              placeholder="Phone"
              className="border-2 border-black shadow-sm"
            />
          </label>
          <label className="flex flex-col text-bold text-lg mb-4">
            EMAIL{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border-2 border-black shadow-sm"
            />{" "}
          </label>
          <div>
            <label className="flex flex-col text-bold text-lg mb-4">
              PIC
              <input type="file" accept="image/jpg" />
            </label>
          </div>{" "}
          <div className="flex">
            <button
              type="submit"
              className="w-24 bg-amber-400 border-2 border-black shadow-sm mt-4 p-1 px-2 text-xs font-body"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
